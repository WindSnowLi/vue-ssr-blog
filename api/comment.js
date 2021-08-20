import request from "../utils/request";

/**
 * 获取评论表
 * @param {Number} targetId 评论目标ID
 * @param {String} sessionType 会话类型
 * @param status 评论状态
 */
export function getTargetComments(sessionType, status, targetId = null) {
  return request({
    url: '/comment/getTargetComments',
    method: 'post',
    data: {
      targetId,
      sessionType,
      status
    }
  })
}

/**
 * 发表评论
 * @param {string} token 验证信息
 * @param {Number} targetId 评论目标ID
 * @param {String} sessionType 会话类型
 * @param {String} content 评论内容
 * @param {Number} parentId 父评论ID
 * @param {Number} toUser 回复给谁
 */
export function addComment(token, sessionType, content, targetId = null, parentId = null, toUser = null) {
  return request({
    url: '/comment/addComment',
    method: 'post',
    data: {
      token,
      content: {
        targetId,
        sessionType,
        content,
        parentId,
        toUser
      }
    }
  })
}
