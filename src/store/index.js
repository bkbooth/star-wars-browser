import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import people from './modules/people'

const DEBUG = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people,
  },
  strict: DEBUG,
  plugins: DEBUG ? [createLogger()] : [],
})
