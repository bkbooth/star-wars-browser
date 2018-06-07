import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/pages/Home') },

    {
      path: '/people',
      component: () => import(/* webpackChunkName: "people" */ '@/components/people/List'),
    },
    {
      path: '/people/:personId',
      component: () => import(/* webpackChunkName: "people" */ '@/components/people/Detail'),
    },

    {
      path: '/planets',
      component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/List'),
    },
    {
      path: '/planets/:planetId',
      component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/Detail'),
    },

    { path: '*', component: () => import('@/components/pages/NotFound') },
  ],
})
