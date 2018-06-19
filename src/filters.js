/**
 * Register global filters
 */
import Vue from 'vue'
import capitalize from 'lodash/capitalize'
import format from 'date-fns/format'
import romanize from 'romanize'

Vue.filter('capitalize', capitalize)
Vue.filter('date', (dateString, dateFormat) => format(new Date(dateString), dateFormat))
Vue.filter('number', value => Number(value).toLocaleString())
Vue.filter('romanize', romanize)
