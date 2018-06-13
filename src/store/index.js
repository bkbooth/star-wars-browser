import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createModule from './create-module'

const DEBUG = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films: createModule('films'),
    planets: createModule('planets'),
    species: createModule('species'),
    people: createModule('people'),
    starships: createModule('starships'),
    vehicles: createModule('vehicles'),
  },
  strict: DEBUG,
  plugins: DEBUG ? [createLogger()] : [],
})
