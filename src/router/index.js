import Vue from 'vue'
import Router from 'vue-router'
import filmsRoutes from './films'
import planetsRoutes from './planets'
import speciesRoutes from './species'
import peopleRoutes from './people'
import starshipsRoutes from './starships'
import vehiclesRoutes from './vehicles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/pages/Home') },

    ...filmsRoutes,
    ...planetsRoutes,
    ...speciesRoutes,
    ...peopleRoutes,
    ...starshipsRoutes,
    ...vehiclesRoutes,

    { path: '*', component: () => import('@/components/pages/NotFound') },
  ],
})
