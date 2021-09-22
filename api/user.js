import request from '../utils/request.js'

/**
 * 获取用户关于信息
 * @param _id
 */
export function getAboutByUserId(_id) {
  return request({
    url: '/user/getAboutByUserId',
    method: 'post',
    data: {
      id: 1
    }
  })
}

/**
 *
 * 根据Gitee授权码获取对象
 * @param {String} code Gitee授权码
 * @param {String} redirect 重定向Url
 */
export function giteeLogin(code, redirect) {
  return request({
    url: '/user/giteeLogin',
    method: 'post',
    data: {
      code,
      redirect
    }
  })
}

/**
 * 登录，返回验证信息
 * @param {Object} data 行号密码
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * 通过用户ID获取信息
 */
export function getVisitorInfo() {
  return request({
    url: '/user/getVisitorInfo',
    method: 'post',
    data: {
      id: 1
    }
  })
}
