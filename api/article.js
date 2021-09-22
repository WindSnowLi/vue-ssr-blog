import request from '../utils/request.js'

/**
 * 获取所有文章
 */
export function getArticlesByPage(page, limit) {
  return request({
    url: '/article/getArticlesByPage',
    method: 'post',
    data: {
      page,
      limit,
      sort: '-id',
      status: 'PUBLISHED'
    }
  })
}

/**
 * 获取最近文章
 */
export function getRecentArticles() {
  return getArticlesByPage(1, 3)
}

/**
 * 分页获取文章
 * @param {*} page 页
 * @param {*} limit 每页大小
 */
export function getHistoryArticles(page, limit) {
  return getArticlesByPage(page, limit)
}

/**
 * 获取访问最多的文章
 */
export function getMostPV() {
  return request({
    url: '/article/getMostPV',
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
      id
    }
  })
}

/**
 * 获取所属分类文章
 * @param {*} id 分类ID
 * @param {*} page 页
 * @param {*} limit 每页大小
 */
export function getArticlesByType(id, page, limit) {
  return request({
    url: '/article/getArticlesByType',
    method: 'post',
    data: {
      id,
      content: {
        limit,
        page,
        sort: '-id',
        status: 'PUBLISHED'
      }
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
      id
    }
  })
}

/**
 * 通过标签ID获取标签
 * @param {*} id 标签ID
 */
export function getLabelById(id) {
  return request({
    url: '/articleLabel/getLabelById',
    method: 'post',
    data: {
      id
    }
  })
}

/**
 * 通过标签ID获取标签所属文章
 * @param {*} id 标签ID
 * @param {*} page 页
 * @param {*} limit 每页大小
 */
export function getArticlesByLabel(id, page, limit) {
  return request({
    url: '/article/getArticlesByLabel',
    method: 'post',
    data: {
      id,
      content: {
        limit,
        page,
        sort: '-id',
        status: 'PUBLISHED'
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
