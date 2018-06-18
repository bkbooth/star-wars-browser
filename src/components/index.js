/**
 * Register global components
 */
import Vue from 'vue'

import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { VTooltip } from 'v-tooltip'
import CategoryIcon from '@/components/ui/CategoryIcon'
import Alert from '@/components/ui/Alert'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Breadcrumb from '@/components/ui/Breadcrumb'

Vue.directive('tooltip', VTooltip)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('c-icon', CategoryIcon)
Vue.component('alert', Alert)
Vue.component('loading-spinner', LoadingSpinner)
Vue.component('breadcrumb', Breadcrumb)
