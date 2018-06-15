import compose from 'lodash/fp/compose'
import find from 'lodash/find'
import sortBy from 'lodash/fp/sortBy'
import uniqBy from 'lodash/fp/uniqBy'
import { loadData } from '../api'
import {
  ADD_DATA,
  SET_LOADING,
  SET_ERROR,
} from './mutation-types'

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
      commit(SET_LOADING, true)
      commit(SET_ERROR, null)
      try {
        let results = await loadData(name)
        commit(ADD_DATA, results)
      } catch (err) {
        let errorMessage = `Failed loading all ${name}`
        commit(SET_ERROR, errorMessage)
        console.error(errorMessage, err)
      }
      commit(SET_LOADING, false)
    },

    async loadOne({ commit }, itemSlug) {
      commit(SET_LOADING, true)
      commit(SET_ERROR, null)
      try {
        let result = await loadData(name, itemSlug)
        commit(ADD_DATA, [result])
      } catch (err) {
        let errorMessage = `Failed loading '${itemSlug}' from ${name}`
        commit(SET_ERROR, errorMessage)
        console.error(errorMessage, err)
      }
      commit(SET_LOADING, false)
    },
  }

  let mutations = {
    [ADD_DATA](state, newData) {
      state.data = uniqAndSort([...newData, ...state.data])
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
