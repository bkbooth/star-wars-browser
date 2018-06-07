export default [
  {
    path: '/planets',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/List'),
  },
  {
    path: '/planets/:planetId',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/Detail'),
  },
]
