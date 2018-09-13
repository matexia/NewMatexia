/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import Vue from 'vue'
import Vuex from 'Vuex'

import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  }
})
