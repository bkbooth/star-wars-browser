import { loadData } from '../api'

export default function createModule(name) {
  let state = {
    data: {},
    loading: false,
  }

  let getters = {
    count: state => Object.keys(state.data).length,
    getItem: state => id => state.data[id],
  }

  let actions = {
    async loadAll({ commit, state }) {
      commit('setLoading', true)
      let results = await loadData(name)
      commit('setData', Object.assign({}, state.data, resultsAsObject(results)))
      commit('setLoading', false)
    },

    async loadOne({ commit, state }, itemId) {
      commit('setLoading', true)
      let result = await loadData(name, itemId)
      commit('setData', Object.assign({}, state.data, { [result.id]: result }))
      commit('setLoading', false)
    },
  }

  let mutations = {
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

function resultsAsObject(results) {
  return results.reduce((results, result) => {
    return Object.assign(results, { [result.id]: result })
  }, {})
}
