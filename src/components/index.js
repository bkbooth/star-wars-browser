/**
 * Register global components
 */
import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('loading-spinner', LoadingSpinner)
