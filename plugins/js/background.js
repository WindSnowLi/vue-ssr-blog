/**
 * 设置动态壁纸
 * @param {Object} imgList 图片列表
 * @param {Object} id 控件ID
 */
export function background(imgList, id) {
  var duration = imgList.length * 6;
  var rs = '';
  for (var i in imgList) {
    rs = rs + "<li style='list-style-type:none;'><span style='background-image: url(" + imgList[i] +
      ");animation:imageAnimation " + duration + "s linear infinite " + i * 6 + "s;-webkit-animation:imageAnimation " +
      duration + "s linear infinite " + i * 6 + "s;'></span></li>";
  }
  if (process.client) {
    document.getElementById('background-list').innerHTML = rs;
  }
}
