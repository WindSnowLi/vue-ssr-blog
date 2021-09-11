<template>
  <section class="list-sidebar pb-10">
    <!-- Section title -->
    <div v-if="title != null" class="section-title">
      <h2>{{ title }}</h2>
    </div>
    <!-- End of Section title -->
    <div class="post-blog-list">
      <!-- Post -->
      <div
        v-for="(item,i) in articles"
        :key="i"
        :class="[item.article.coverPic === &quot;&quot;?&quot;post-has-no-thumb&quot;:&quot;post-has-right-thumb&quot;,&quot;post-default&quot;, &quot;panel&quot;, &quot;wow&quot;, &quot;bounceInDown fadeIn&quot;]"
      >
        <div class="d-flex flex-wrap">
          <div class="post-thumb  panel">
            <nuxt-link :to="{ name:'article-detail-id',params:{ id: item.article.id } }">
              <img
                :src="item.article.coverPic"
                alt=""
                class="img-fluid"
                style="position: absolute;
                          top:50%;
                          left:50%;
                          transform: translate(-50%,-50%);
                          background-color: rgb(248, 248, 248);"
              >
            </nuxt-link>
          </div>
          <div class="post-data order-md-1">
            <!-- Category -->
            <div class="cats">
              <fa :icon="['fas', 'tag']" />
              <nuxt-link :to="{ name: 'article-type-id', params: { id: item.article.articleType.id } }">
                {{ item.article.articleType.name }}
              </nuxt-link>
            </div>
            <!-- Title -->
            <div class="title">
              <h2>
                <nuxt-link :to="{ name:'article-detail-id',params:{ id: item.article.id } }">
                  {{ item.article.title }}
                </nuxt-link>
              </h2>
            </div>
            <!-- Post Meta -->
            <ul class="nav meta align-items-center">
              <li class="meta-author">
                <nuxt-link :to="{ name: 'about' }"><img :src="item.user.avatar" alt="" class="img-fluid"></nuxt-link>
                <a href="#">{{ item.user.nickname }}</a>
              </li>
              <li class="meta-date"><a href="#">{{ item.article.createTime }}</a></li>
              <li class="meta-date">
                <fa :icon="['fas', 'eye']" />
                <a href="#">{{ item.article.visitsCount }}</a>
              </li>
            </ul>
            <!-- Post Desc -->
            <div class="desc">
              <p>
                {{ item.article.summary.substring(0,50) }}...
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Post -->
    </div>
  </section>
</template>

<script>
import 'animate.css'
if (process.browser) { // 在这里根据环境引入wow.js
  var { WOW } = require('wowjs')
}
export default {
  name: 'ListSidebar',
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      required: false
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
