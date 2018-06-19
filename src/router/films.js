export default [
  {
    path: '/films',
    name: 'films.list',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/films/:slug',
    name: 'films.detail',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/Detail'),
  },
]
