import find from 'lodash/find'
import uniqBy from 'lodash/uniqBy'
import { loadData } from '../api'
import {
  ADD_DATA,
  SET_LOADING,
  SET_ERROR,
} from './mutation-types'

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
    async loadMany({ commit }, query = {}) {
      commit(SET_LOADING, true)
      commit(SET_ERROR, null)
      try {
        let results = await loadData(name, query)
        commit(ADD_DATA, results)
      } catch (err) {
        let errorMessage = `Failed loading ${name}`
        commit(SET_ERROR, errorMessage)
        console.error(errorMessage, err)
      }
      commit(SET_LOADING, false)
    },

    async loadOne({ commit }, slug) {
      commit(SET_LOADING, true)
      commit(SET_ERROR, null)
      try {
        let result = await loadData(name, { slug })
        commit(ADD_DATA, [result])
      } catch (err) {
        let errorMessage = `Failed loading '${slug}' from ${name}`
        commit(SET_ERROR, errorMessage)
        console.error(errorMessage, err)
      }
      commit(SET_LOADING, false)
    },
  }

  let mutations = {
    [ADD_DATA](state, newData) {
      state.data = uniqBy([...newData, ...state.data], 'id')
    },
    [SET_LOADING](state, loading) {
      state.loading = loading
    },
    [SET_ERROR](state, error) {
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
