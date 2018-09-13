/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
export default [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "errors" */'@/views/errors')
  }
]
