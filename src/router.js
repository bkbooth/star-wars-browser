import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/Home') },

    {
      path: '/people',
      component: () => import(/* webpackChunkName: "people" */ '@/components/People'),
    },
    {
      path: '/people/:personId',
      component: () => import(/* webpackChunkName: "people" */ '@/components/Person'),
    },

    {
      path: '/planets',
      component: () => import(/* webpackChunkName: "planets" */ '@/components/Planets'),
    },
    {
      path: '/planets/:planetId',
      component: () => import(/* webpackChunkName: "planets" */ '@/components/Planet'),
    },

    { path: '*', component: () => import('@/components/NotFound') },
  ],
})
