import request from "../utils/request"

/**
 * 通过分类ID获取分类
 */
export function getAllType() {
  return request({
    url: '/articleLabel/getAllType',
    method: 'post'
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
