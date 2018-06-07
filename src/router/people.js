export default [
  {
    path: '/people',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/List'),
  },
  {
    path: '/people/:personId',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/Detail'),
  },
]
