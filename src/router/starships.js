export default [
  {
    path: '/starships',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
  },
  {
    path: '/starships/:starshipId',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
