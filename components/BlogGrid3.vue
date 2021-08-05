<template>
  <div class="container pt-120 pb-90">
    <div class="row">
      <div class="col-md-4 col-sm-6 panel wow bounceInDown fadeIn" :value="article" :key="i" v-for="(article,i) in articles">
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
  import 'animate.css'
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }
  export default {
    name: 'BlogGrid3',
    props: {
      articles: {
        type: Array,
        required: true
      }
    },
    watch: {
      articles() {
        this.$nextTick(() => { // 在dom渲染完后,再执行动画
         		new WOW().init()
        })
      }
    }
  }
</script>
