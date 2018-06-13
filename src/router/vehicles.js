export default [
  {
    path: '/vehicles',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/List'),
  },
  {
    path: '/vehicles/:vehicleSlug',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/Detail'),
  },
]
