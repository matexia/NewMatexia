/**
 *
 * @author matexia
 * @created 2018/08/21 14:28
*/
import instance from '@/api/http'
/**
 * @param { String= } params.username - 用户名
 * @param { String= } params.password - 密码
 * @returns { Promise }
*/
export const getLogin = (params) => {
  return instance.get('/login', { params })
}
/**
 * @param { String= } params.username - 用户名
 * @param { String= } params.password - 密码
 * @returns { Promise }
*/
export const registerApi = (params) => {
  return instance.post('/post/register', params)
}
/**
 * @param { String= } params.username - 用户名
 * @param { String= } params.email - 邮箱
 * @returns { Promise }
*/
export const verificationApi = (params) => {
  return instance.post('/post/verification', params)
}

export default {
  getLogin,
  registerApi,
  verificationApi
}
