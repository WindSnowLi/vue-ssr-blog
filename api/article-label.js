import request from "../utils/request"

/**
 * 通过分类ID获取分类
 */
export function getAllTypeByUserId() {
  return request({
    url: '/articleLabel/getAllTypeByUserId',
    method: 'post',
    data: {
      id: 1
    }
  })
}

/**
 * 获取所有标签
 */
export function getAllLabel() {
  return request({
    url: '/articleLabel/getAllLabel',
    method: 'post'
  })
}
