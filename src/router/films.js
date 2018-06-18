export default [
  {
    path: '/films',
    name: 'films.list',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/List'),
  },
  {
    path: '/films/:slug',
    name: 'films.detail',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/Detail'),
  },
]
