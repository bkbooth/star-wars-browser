/**
 * Register global filters
 */
import Vue from 'vue'
import capitalize from 'lodash/capitalize'
import format from 'date-fns/format'
import romanize from 'romanize'
import { approxNumber } from './utils/approx-number'

Vue.filter('approx-number', approxNumber)
Vue.filter('birthYear', value => value >= 0 ? `${value}BBY` : `${String(value).slice(1)}ABY`)
Vue.filter('capitalize', capitalize)
Vue.filter('date', (dateString, dateFormat) => format(new Date(dateString), dateFormat))
Vue.filter('number', value => Number(value).toLocaleString())
Vue.filter('romanize', romanize)
