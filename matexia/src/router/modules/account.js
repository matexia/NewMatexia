/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
export default [
  {
    name: 'account',
    path: '/account',
    redirect: {
      name: 'login',
      replace: true
    },
    component: () => import(/* webpackChunkName: "account" */'@/views/account'),
    children: [
      {
        name: 'login',
        path: 'login',
        meta: {
          title: '用户登录'
        },
        component: () => import(/* webpackChunkName: "account" */'@/views/account/login')
      }, {
        name: 'register',
        path: 'register',
        meta: {
          title: '用户注册'
        },
        component: () => import(/* webpackChunkName: "account" */'@/views/account/register')
      }, {
        name: 'forgot',
        path: 'forgot',
        meta: {
          title: '找回密码'
        },
        component: () => import(/* webpackChunkName: "account" */'@/views/account/forgot')
      }
    ]
  }
]
