import request from '../utils/request.js'

/**
 *  获取友链列表
 */
export function getFriendLinks() {
  return request({
    url: '/links/getFriendLinks',
    method: 'post',
    data: {
      status: 'PASS'
    }
  })
}

/**
 *  申请友链
 */
export function applyFriendLink(friendLinks) {
  return request({
    url: '/links/applyFriendLink',
    method: 'post',
    data: {
      coverPic: friendLinks.coverPic,
      email: friendLinks.email,
      describe: friendLinks.describe,
      title: friendLinks.title,
      link: friendLinks.link
    }
  })
}
