import request from '../utils/request.js';

/**
 * 获取用户UI配置
 * @param {Int} id 验证信息
 */
export function getUiConfig(_id) {
  return request({
    url: '/sys/getUiConfig',
    method: 'post',
    data: {
      id: 1
    }
  })
}

/**
 * 获取系统UI配置
 */
export function getSysConfig() {
  return request({
    url: '/sys/getSysConfig',
    method: 'post',
    data: {}
  })
}
