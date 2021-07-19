<template>
  <div class="widget widget-tag-cloud panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      标签
    </h4>
    <!-- 组件标题结束 -->

    <!-- 组件内容 -->
    <div class="widget-content tagcloud">
      <router-link :value="label" :key="i" v-for="(label,i) in labels"
        :to="{ name:'article-tag-id',params:{ id: label.id } }">
        {{label.name}}
      </router-link>
    </div>
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
    }
  }
</script>
