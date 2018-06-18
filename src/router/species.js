export default [
  {
    path: '/species',
    name: 'species.list',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/List'),
  },
  {
    path: '/species/:slug',
    name: 'species.detail',
    component: () => import(/* webpackChunkName: "species" */ '@/components/species/Detail'),
  },
]
