export default [
  {
    path: '/species',
    name: 'species.list',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/species/:slug',
    name: 'species.detail',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/Detail'),
  },
]
