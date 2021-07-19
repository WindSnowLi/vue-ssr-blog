// 引入 highlight.js 代码高亮工具
import Vue from 'vue'
import hljs from "highlight.js";
// 增加自定义命令v-highlight
const highlight = Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
// 增加组定义属性，用于在代码中预处理代码格式
Vue.prototype.$hljs = hljs;

export default highlight
