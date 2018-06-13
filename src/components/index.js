/**
 * Register global components
 */
import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CategoryIcon from '@/components/ui/CategoryIcon'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Breadcrumb from '@/components/ui/Breadcrumb'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('c-icon', CategoryIcon)
Vue.component('loading-spinner', LoadingSpinner)
Vue.component('breadcrumb', Breadcrumb)
