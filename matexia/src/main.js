/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import matexia from '@/libs/common'

Vue.prototype.$base64 = require('js-base64').Base64
Vue.prototype.$matexia = matexia

Vue.use(iview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
