/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
 */
import qs from 'qs'
import axios from 'axios'
import iview from 'iview'
import config from './config'

// 状态检查
export const checkState = async (response) => {
  const code = response.data.code
  if (code === '1') {
    return Promise.resolve(true)
  }
  if (code === '-99') {
  } else if (code === '0' && response.config.message !== false) {
    iview.Message.destroy()
    iview.Message.error(response.data.message)
  }
  return Promise.resolve(false)
}

axios.defaults.baseURL = config.api.baseURL
axios.defaults.timeout = config.api.timeout
let loadinginstace
let matexiadiv = document.getElementById('app')

axios.interceptors.request.use((options) => {
  loadinginstace = "<div data-v-3b882df3=' class='ivu-spin ivu-spin-default ivu-spin-fix ivu-spin-show-text' style='position: absolute;left: 50%;top: 50%;'><div class='ivu-spin-main'><span class='ivu-spin-dot'></span> <div class='ivu-spin-text'><i data-v-3b882df3=' class='ivu-icon ivu-icon-ios-loading' style='font-size: 18px;'></i> <div data-v-3b882df3='>Loading</div></div></div></div>"
  let loading = document.createElement('div')
  loading.cssText = 'width:100%;height:100%;position:fixed;left:0;top:0;background:#fff;opacity:.5;'
  loading.setAttribute('style', 'width:100%;height:100%;position:fixed;left:0;top:0;background:#fff;opacity:.6;z-index: 9999;')
  loading.innerHTML = loadinginstace
  matexiadiv.appendChild(loading)
  const token = sessionStorage.getItem('token')
  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  options.data = qs.stringify(options.data)
  return options
}, (error) => {
  matexiadiv.removeChild(matexiadiv.childNodes[1])
  return Promise.reject(error)
})

axios.interceptors.response.use(async (response) => {
  matexiadiv.removeChild(matexiadiv.childNodes[1])
  await checkState(response)
  return (response.config && response.config.entire) !== true ? response.data : response
}, (error) => {
  matexiadiv.removeChild(matexiadiv.childNodes[1])
  iview.Message.error('网络异常,请稍候')
  return Promise.reject(error)
})

export default axios
