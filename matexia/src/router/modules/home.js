/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
export default [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
      requireAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */'@/views/home')
  }
]
