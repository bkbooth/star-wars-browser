/**
 * Register global filters
 */
import Vue from 'vue'
import capitalize from 'lodash/capitalize'

Vue.filter('capitalize', capitalize)
