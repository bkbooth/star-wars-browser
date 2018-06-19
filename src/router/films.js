import validateQueryParams from '../utils/validate-query-params'

export default [
  {
    path: '/films',
    name: 'films.list',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/films/:slug',
    name: 'films.detail',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/Detail'),
  },
]
