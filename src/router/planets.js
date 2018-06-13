export default [
  {
    path: '/planets',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/List'),
  },
  {
    path: '/planets/:planetSlug',
    component: () => import(/* webpackChunkName: "planets" */ '@/components/planets/Detail'),
  },
]
