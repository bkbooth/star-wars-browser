import { validateQueryParams } from '../utils/validate-query-params'

export default [
  {
    path: '/vehicles',
    name: 'vehicles.list',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/vehicles/:slug',
    name: 'vehicles.detail',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/Detail'),
  },
]
