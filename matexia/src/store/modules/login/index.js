/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  user: {},
  token: ''
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
