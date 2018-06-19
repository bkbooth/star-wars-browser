import validateQueryParams from '../utils/validate-query-params'

export default [
  {
    path: '/species',
    name: 'species.list',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/species/:slug',
    name: 'species.detail',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/Detail'),
  },
]
