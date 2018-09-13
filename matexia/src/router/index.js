/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/HelloWorld'
import test from './modules/test'
import err from './modules/err'
import home from './modules/home'
import account from './modules/account'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...test,
    ...err,
    ...home,
    ...account
  ]
})
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requireAuth)) {
    const token = sessionStorage.getItem('token')
    // 判断当前token是否存在
    if (token) {
      next()
    } else {
      next({
        path: '/account/login',
        query: {
          redirect: to.fullPath
        }// 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
