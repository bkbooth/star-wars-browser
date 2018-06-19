export default [
  {
    path: '/characters',
    name: 'characters.list',
    component: () => import(/* webpackChunkName: "characters" */ '@/components/characters/List'),
    props: (route) => ({ order: route.query.orderBy }),
  },
  {
    path: '/characters/:slug',
    name: 'characters.detail',
    component: () => import(/* webpackChunkName: "characters" */ '@/components/characters/Detail'),
  },
]
