/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import * as type from './mutation-type'

export const token = ({ commit }, payload) => {
  commit(type.TOKEN, payload)
}
export const login = ({ commit }, payload) => {
  commit(type.LOGIN, payload)
}
export const logout = async ({ commit, rootState }, payload) => {
  commit(type.LOGOUT, payload)
}
export const layout = ({ commit }, payload) => {
  commit(type.LAYOUT, payload)
}
export const breakpoints = ({ commit }, payload) => {
  commit(type.BREAKPOINTS, payload)
}
