import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/main.css'

// Register global components
import LoadingSpinner from '@/components/LoadingSpinner'
Vue.component('LoadingSpinner', LoadingSpinner)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
