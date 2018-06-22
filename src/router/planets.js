import { validateQueryParams } from '../utils/validate-query-params'

export default [
  {
    path: '/planets',
    name: 'planets.list',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/planets/:slug',
    name: 'planets.detail',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/Detail'),
  },
]
