<template>
  <div class="widget text-center panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      标签
    </h4>
    <!-- 组件标题结束 -->
    <!-- 组件内容 -->
    <tag-cloud :labels="tags" :tags-num="tags.length" />
    <!-- 组件内容结束 -->
  </div>
</template>

<script>
export default {
  name: 'TabWidget',
  props: {
    labels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tags: []
    }
  },
  created() { // 初始化标签位置
    const tags = []
    for (let i = 0; i < this.labels.length; i++) {
      const tag = {
        name: this.labels[i].name,
        link: {
          name: 'article-tag-id',
          params: {
            id: this.labels[i].id
          }
        }
      }
      tags.push(tag)
    }
    this.tags = tags
  }
}
</script>
<style scoped>
  /deep/ svg>a>text {
    fill: currentcolor;
  }
</style>
