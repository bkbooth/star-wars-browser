import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createModule from './create-module'

const DEBUG = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people: createModule('people'),
    planets: createModule('planets'),
    films: createModule('films'),
    species: createModule('species'),
    vehicles: createModule('vehicles'),
    starships: createModule('starships'),
  },
  strict: DEBUG,
  plugins: DEBUG ? [createLogger()] : [],
})
