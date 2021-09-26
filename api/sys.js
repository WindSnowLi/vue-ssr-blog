import request from '../utils/request.js'

/**
 * 获取用户UI配置
 * @param _id
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
 * 获取Gitee的应用程序ID
 */
export function getGiteeClientId() {
  return request({
    url: '/sys/getGiteeClientId',
    method: 'post'
  })
}

/**
 * 获取系统基础配置，包含表单描述信息
 */
export function getFixedConfig() {
  return request({
    url: '/sys/getFixedConfig',
    method: 'post'
  })
}
