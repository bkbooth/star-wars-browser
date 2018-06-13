export default [
  {
    path: '/starships',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
  },
  {
    path: '/starships/:starshipSlug',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
