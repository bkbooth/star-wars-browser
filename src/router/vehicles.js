export default [
  {
    path: '/vehicles',
    name: 'vehicles.list',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/List'),
  },
  {
    path: '/vehicles/:vehicleSlug',
    name: 'vehicles.detail',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/Detail'),
  },
]
