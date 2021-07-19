<template>
  <div class="widget widget-recent-post panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      最多访问
    </h4>
    <!-- 组件标题结束 -->

    <!-- 组件内容 -->
    <div class="widget-content" :value="article" :key="i" v-for="(article,i) in articles">
      <!-- Single Post -->
      <div class="wrp-cover panel">
        <!-- Post Thumbnail -->
        <div class="post-thumb">
          <router-link :to="{ name:'article-detail-id',params:{ id: article.id } }">
            <img :src="article.coverPic" alt="" class="img-fluid">
          </router-link>
        </div>
        <!-- Post Title -->
        <div class="post-title">
          <router-link :to="{ name:'article-detail-id',params:{ id: article.id } }">
            {{article.title}}
          </router-link>
        </div>
      </div>
      <br>
    </div>
    <!-- 组件内容结束 -->
  </div>
</template>

<script>
  export default {
    name: 'MostVisits',
    props: {
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>
