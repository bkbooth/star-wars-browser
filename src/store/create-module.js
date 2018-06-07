import { loadData } from '../api'

const MAX_RESULTS = 10

export default function createModule(name) {
  let state = {
    count: 0,
    data: {},
    loading: false,
  }

  let getters = {
    dataCount: state => Object.keys(state.data).length,
    getItem: state => id => state.data[id],
  }

  let actions = {
    async loadAll({ commit, state, getters }) {
      if (state.loading || (state.count > 0 && state.count === getters.dataCount)) return

      commit('setLoading', true)
      let page = 0
      let hasNext = true
      while (hasNext) {
        let { count, next, results } = await loadData(name, ++page)
        if (next == null) hasNext = false
        if (page === 1) commit('setCount', count)
        commit('setData', Object.assign({}, state.data, resultsAsObject(results, page)))
      }
      commit('setLoading', false)
    },

    async loadOne({ commit, state }, itemId) {
      if (state.data[itemId]) return

      commit('setLoading', true)
      let pageToLoad = Math.ceil(Number(itemId) / MAX_RESULTS)
      let { count, results } = await loadData(name, pageToLoad)
      commit('setCount', count)
      commit('setData', Object.assign({}, state.data, resultsAsObject(results, pageToLoad)))
      commit('setLoading', false)
    },
  }

  let mutations = {
    setCount(state, count) {
      state.count = count
    },
    setData(state, data) {
      state.data = data
    },
    setLoading(state, loading) {
      state.loading = loading
    },
  }
  return {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  }
}

function resultsAsObject(results, page) {
  return results.reduce((results, result, index) => {
    let key = String(index + 1 + ((page - 1) * MAX_RESULTS))
    return Object.assign(results, { [key]: result })
  }, {})
}
