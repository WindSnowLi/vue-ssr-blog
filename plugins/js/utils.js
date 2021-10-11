/**
 * 设置动态壁纸
 */
export function getPageUrl() {
  if (process.client) {
    return window.location.protocol + '//' + window.location.host + window.location.pathname
  } else {
    return '#'
  }
}
