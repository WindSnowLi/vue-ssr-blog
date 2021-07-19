<template>
  <div class="container pt-120 pb-90">
    <div class="row">
      <div class="col-md-4 col-sm-6 panel" :value="article" :key="i" v-for="(article,i) in articles">
        <!-- 文章 -->
        <div class="post-default">
          <div class="post-thumb">
            <nuxt-link :to="{ name:'article-detail-id',params:{ id: article.article.id } }">
              <img :src="article.article.coverPic" alt="" class="img-fluid">
            </nuxt-link>
          </div>
          <div class="post-data">
            <!-- 分类 -->
            <div class="cats"><a href="javascript:void(0)">{{article.article.articleType.name}}</a></div>
            <!-- Title -->
            <div class="title">
              <h2>
                <nuxt-link :to="{ name:'article-detail-id',params:{ id: article.article.id } }">
                  {{article.article.title}}
                </nuxt-link>
              </h2>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <p>
                {{article.article.summary.substring(0,30)}}···
              </p>
            </div>
          </div>
        </div>
        <!-- 文章结束 -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogGrid3',
    props: {
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>
