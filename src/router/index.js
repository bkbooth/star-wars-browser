import Vue from 'vue'
import Router from 'vue-router'
import peopleRoutes from './people'
import planetsRoutes from './planets'
import filmsRoutes from './films'
import speciesRoutes from './species'
import vehiclesRoutes from './vehicles'
import starshipsRoutes from './starships'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/pages/Home') },

    ...peopleRoutes,
    ...planetsRoutes,
    ...filmsRoutes,
    ...speciesRoutes,
    ...vehiclesRoutes,
    ...starshipsRoutes,

    { path: '*', component: () => import('@/components/pages/NotFound') },
  ],
})
