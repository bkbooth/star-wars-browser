export default [
  {
    path: '/vehicles',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/List'),
  },
  {
    path: '/vehicles/:vehicleId',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/Detail'),
  },
]
