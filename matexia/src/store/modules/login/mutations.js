/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import extend from 'extend'
import * as type from './mutation-type'
export default {
  [type.TOKEN] (state, payload) {
    state.token = payload
  },
  // 登录
  [type.LOGIN] (state, payload) {
    // storage.local.setAll({
    //     user: payload.user,
    //     token: payload.token
    // })
    state.user = payload.user
    state.token = payload.token
  },
  // 退出登录
  [type.LOGOUT] (state) {
    // storage.local.remove('user')
    // storage.local.remove('token')
    state.user = {}
    state.token = ''
  },
  [type.LAYOUT] (state, payload) {
    state.layout = extend(true, {}, state.layout, payload)
  },
  [type.BREAKPOINTS] (state, payload) {
    state.breakpoints = extend(true, {}, state.breakpoints, payload)
  }
}
