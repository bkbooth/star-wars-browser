import { loadData } from '../../api'

let state = {
  count: 0,
  data: [],
  loading: false,
}

let getters = {
  dataCount: state => state.data.length,
}

let actions = {
  async loadAll({ commit, state, getters }) {
    if (state.loading || (state.count > 0 && state.count === getters.dataCount)) return

    commit('setData', [])
    commit('setLoading', true)
    let page = 0
    let hasNext = true
    while (hasNext) {
      let { count, next, results } = await loadData('people', ++page)
      if (next == null) hasNext = false
      if (page === 1) commit('setCount', count)
      commit('setData', [...state.data, ...results])
    }
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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
