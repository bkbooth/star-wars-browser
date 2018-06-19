export default [
  {
    path: '/planets',
    name: 'planets.list',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/planets/:slug',
    name: 'planets.detail',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/Detail'),
  },
]
