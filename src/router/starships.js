export default [
  {
    path: '/starships',
    name: 'starships.list',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
  },
  {
    path: '/starships/:starshipSlug',
    name: 'starships.detail',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
