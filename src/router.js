import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/Home') },
    { path: '/people', component: () => import('@/components/People') },
    { path: '*', component: () => import('@/components/NotFound') },
  ],
})