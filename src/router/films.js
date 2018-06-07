export default [
  {
    path: '/films',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/List'),
  },
  {
    path: '/films/:filmId',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/Detail'),
  },
]
