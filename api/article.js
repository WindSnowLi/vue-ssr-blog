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
      limit: limit,
      status: 'PUBLISHED'
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
      limit: 3,
      status: 'PUBLISHED'
    }
  })
}

/**
 * 分页获取文章
 * @param userId 用户ID
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
      limit: limit,
      status: 'PUBLISHED'
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
      content: {
        limit: 100,
        page: 1
      }
    }
  })
}

/**
 * 分页获取文章ID列表
 * @param {*} page 页
 * @param {*} limit 每页大小
 */
export function getArticleIdByPage(page, limit) {
  return request({
    url: '/article/getArticleIdByPage',
    method: 'post',
    data: {
      limit,
      page,
      status: 'PUBLISHED'
    }
  })
}
