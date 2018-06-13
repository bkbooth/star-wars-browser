export default [
  {
    path: '/films',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/List'),
  },
  {
    path: '/films/:filmSlug',
    component: () => import(/* webpackChunkName: "films" */ '@/components/films/Detail'),
  },
]
