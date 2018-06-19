import validateQueryParams from '../utils/validate-query-params'

export default [
  {
    path: '/characters',
    name: 'characters.list',
    component: () => import(/* webpackChunkName: "characters" */ '@/components/characters/List'),
    props: (route) => ({
      order: route.query.orderBy,
      page: route.query.page && Number(route.query.page),
      pageSize: route.query.pageSize && Number(route.query.pageSize),
    }),
    beforeEnter: validateQueryParams,
  },
  {
    path: '/characters/:slug',
    name: 'characters.detail',
    component: () => import(/* webpackChunkName: "characters" */ '@/components/characters/Detail'),
  },
]
