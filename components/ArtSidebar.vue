<template>
  <div class="widget widget-recent-post panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      {{ title }}
    </h4>
    <!-- 组件标题结束 -->

    <!-- 组件内容 -->
    <div v-for="(item,i) in articles" :key="i" class="widget-content">
      <ul class="post-title">
        <li>
          <router-link :to="{ name:'article-detail-id',params:{ id: item.article.id } }">
            {{ item.article.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 组件内容结束 -->
  </div>
</template>

<script>
export default {
  name: 'ArtSidebar',
  props: {
    articles: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
