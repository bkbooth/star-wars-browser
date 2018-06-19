export default [
  {
    path: '/vehicles',
    name: 'vehicles.list',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/vehicles/:slug',
    name: 'vehicles.detail',
    component: () => import(/* webpackChunkName: "vehicles" */ '@/components/vehicles/Detail'),
  },
]
