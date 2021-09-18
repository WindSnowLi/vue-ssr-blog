<template>
  <div class="widget widget-recent-post panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      {{ title }}
    </h4>
    <!-- 组件标题结束 -->

    <!-- 组件内容 -->
    <div v-for="(item,i) in articles" :key="i" class="widget-content">
      <!-- Single Post -->
      <div class="wrp-cover panel" style="margin-top: 1px;">
        <!-- Post Thumbnail -->
        <div v-if="item.article.coverPic" class="post-thumb">
          <router-link :to="{ name:'article-detail-id',params:{ id: item.article.id } }">
            <img :src="item.article.coverPic" alt="" class="img-fluid">
          </router-link>
        </div>
        <!-- Post Title -->
        <div class="post-title">
          <router-link :to="{ name:'article-detail-id',params:{ id: item.article.id } }">
            {{ item.article.title }} &nbsp;
          </router-link>
          <fa :icon="['fas', 'eye']" />
          {{ item.article.pv }}
        </div>
      </div>
      <br>
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
