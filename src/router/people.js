export default [
  {
    path: '/people',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/List'),
  },
  {
    path: '/people/:personSlug',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/Detail'),
  },
]
