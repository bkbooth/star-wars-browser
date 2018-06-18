export default [
  {
    path: '/starships',
    name: 'starships.list',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/List'),
  },
  {
    path: '/starships/:slug',
    name: 'starships.detail',
    component: () => import(/* webpackChunkName: "starships" */ '@/components/starships/Detail'),
  },
]
