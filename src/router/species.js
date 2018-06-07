export default [
  {
    path: '/species',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/List'),
  },
  {
    path: '/species/:speciesId',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/Detail'),
  },
]
