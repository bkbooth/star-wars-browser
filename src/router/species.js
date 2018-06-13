export default [
  {
    path: '/species',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/List'),
  },
  {
    path: '/species/:speciesSlug',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/Detail'),
  },
]
