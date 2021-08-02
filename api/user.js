import request from '../utils/request.js';

/**
 * 获取用户关于信息
 * @param {Object} token 验证信息
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
 * 通过用户ID获取信息
 */
export function findUserByUserId() {
  return request({
    url: '/user/visitorGetAuthorInfo',
    method: 'post',
    data: {
      id: 1
    }
  })
}
