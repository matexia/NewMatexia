/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
export default [
  {
    name: 'test',
    path: '/test',
    meta: {
      title: '测试'
    },
    component: () => import(/* webpackChunkName: "test" */'@/views/test')
  }
]
