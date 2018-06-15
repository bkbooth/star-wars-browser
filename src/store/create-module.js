import { loadData } from '../api'
import compose from 'lodash/fp/compose'
import find from 'lodash/find'
import sortBy from 'lodash/fp/sortBy'
import uniqBy from 'lodash/fp/uniqBy'
const uniqAndSort = compose(sortBy('swapiId'), uniqBy('id'))

export default function createModule(name) {
  let state = {
    data: [],
    loading: false,
    error: null,
  }

  let getters = {
    count: state => state.data.length,
    getItem: state => slug => find(state.data, { slug }),
  }

  let actions = {
    async loadAll({ commit }) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        let results = await loadData(name)
        commit('addData', results)
      } catch (err) {
        let errorMessage = `Failed loading all ${name}`
        commit('setError', errorMessage)
        console.error(errorMessage, err)
      }
      commit('setLoading', false)
    },

    async loadOne({ commit }, itemSlug) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        let result = await loadData(name, itemSlug)
        commit('addData', [result])
      } catch (err) {
        let errorMessage = `Failed loading '${itemSlug}' from ${name}`
        commit('setError', errorMessage)
        console.error(errorMessage, err)
      }
      commit('setLoading', false)
    },
  }

  let mutations = {
    addData(state, newData) {
      state.data = uniqAndSort([...newData, ...state.data])
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
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
