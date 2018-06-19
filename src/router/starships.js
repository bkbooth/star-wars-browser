export default [
  {
    path: '/starships',
    name: 'starships.list',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/starships/:slug',
    name: 'starships.detail',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
