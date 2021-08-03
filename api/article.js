import request from '../utils/request.js';

/**
 * 获取所有文章
 */
export function getArticlesByPage(page, limit) {
  request({
    url: '/article/getArticlesByPage',
    method: 'post',
    data: {
      userId: 1,
      page: page,
      limit: limit
    }
  })
}

/**
 * 获取最近文章
 */
export function getRecentArticles() {
  return request({
    url: '/article/getArticlesByPage',
    method: 'post',
    data: {
      userId: 1,
      page: 1,
      limit: 3
    }
  })
}

/**
 * 分页获取文章
 * @param {*} page 页
 * @param {*} limit 每页大小
*/
export function getHistoryArticles(userId, page, limit) {
  return request({
    url: '/article/getArticlesByPage',
    method: 'post',
    data: {
      userId: userId,
      page: page,
      limit: limit
    }
  })
}

/**
 * 获取所有标签*/
export function getAllLabel() {
  return request({
    url: '/articleLabel/getAllLabel',
    method: 'post'
  })
}

/**
 * 获取所有分类
 */
export function getAllClassify() {
  return request({
    url: '/article/getAllClassify',
    method: 'post'
  })
}

/**
 * 获取用户所有分类
 */
export function getAllTypeByUserId() {
  return request({
    url: '/article/getAllTypeByUserId',
    method: 'post',
    data: {
      id: 1
    }
  })
}

/**
 * 获取访问最多的文章
 */
export function getMostVisits() {
  return request({
    url: '/article/getMostVisitsJson',
    method: 'post',
    data: {
      limit: 5
    }
  })
}

/**
 * 获取单篇文章详情信息
 * @param {*} id 文章ID
 */
export function getArticleById(id) {
  return request({
    url: '/article/getArticleById',
    method: 'post',
    data: {
      id: id
    }
  })
}

/**
 * 获取所属分类文章
 * @param {*} id 分类ID
 */
export function getArticlesByType(id) {
  return request({
    url: '/article/getArticlesByType',
    method: 'post',
    data: {
      id: id
    }
  })
}

/**
 * 通过分类ID获取分类
 * @param {*} id 分类ID
 */
export function getTypeById(id) {
  return request({
    url: '/articleLabel/getTypeById',
    method: 'post',
    data: {
      id: id
    }
  })
}

/**
 * 通过标签ID获取标签
 * @param {*} id 标签ID
 */
export function getLabelById(id) {
  return request({
    url: '/articleLabel/getLabelByIdJson',
    method: 'post',
    data: {
      id: id
    }
  })
}

/**
* 通过标签ID获取标签所属文章
* @param {*} id 标签ID
*/
export function getArticlesByLabel(id) {
  return request({
    url: '/article/getArticlesByLabel',
    method: 'post',
    data: {
      id: id,
      limit: 100,
      page: 1
    }
  })
}
