import { validateQueryParams } from '../utils/validate-query-params'

export default [
  {
    path: '/starships',
    name: 'starships.list',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/starships/:slug',
    name: 'starships.detail',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
