export default [
  {
    path: '/people',
    name: 'people.list',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/List'),
  },
  {
    path: '/people/:personSlug',
    name: 'people.detail',
    component: () => import(/* webpackChunkName: "people" */ '@/components/people/Detail'),
  },
]
