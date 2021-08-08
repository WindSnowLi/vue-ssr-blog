<template>
  <div>
    <page-title :routeList="getPageTitle(articleDetail.article)"></page-title>
    <div class="container pt-40 pb-90">
      <div class="row">
        <div class="col-lg-8 pb-80 panel">
          <div class="post-details-cover">
            <!-- 封面介绍结束 -->
            <div class="post-thumb-cover" style="text-align: center;">
              <!-- 文章元信息 -->
              <div class="post-meta-info">
                <!-- 标题 -->
                <div class="title" style="margin-top: 45px;">
                  <h1>{{articleDetail.article.title}}</h1>
                </div>
                <!-- 类别 -->
                <p class="cats">
                  <fa :icon="['fas', 'list-alt']" />
                  <nuxt-link :to="{ name: 'article-type-id', params: { id: articleDetail.article.articleType.id } }">
                    {{articleDetail.article.articleType.name}}
                  </nuxt-link>
                </p>
                <!-- Meta -->
                <div class="author-box">
                  <ul class="nav meta align-items-center">
                    <li class="meta-author">
                      <img :src="articleDetail.user.avatar" alt="" class="img-fluid">
                      <a href="#">{{articleDetail.user.nickname}}</a>
                    </li>
                    <li class="meta-date"><a href="#">{{articleDetail.article.createTime}}</a></li>
                    <li class="meta-date">
                      <fa :icon="['fas', 'eye']" />
                      <a href="#">{{articleDetail.article.visitsCount}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 文章元信息结束 -->
            </div>
            <!-- 封面介绍结束 -->
            <br>
            <!-- Post Content -->
            <mark-down :md="articleDetail.article.content"></mark-down>
            <!-- End of Post Content -->

            <!-- 标签 -->
            <div class="post-all-tags">
              <template v-for="(label,i) in articleDetail.article.labels">
                <nuxt-link class="badge badge-info" :value="label" :key="i" :to="{ name: 'article-tag-id', params: { id: label.id } }">
                  <fa :icon="['fas', 'tag']" />
                  {{label.name}}
                </nuxt-link>
              </template>
            </div>
            <!-- 标签结束 -->
          </div>
        </div>
        <!-- 侧边栏信息 -->
        <my-sidebar v-bind:user="user" v-bind:most-visits="mostVisits" v-bind:labels="labels"></my-sidebar>
        <!-- 侧边栏信息结束 -->
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Detail',
    props: {
      articleDetail: {
        type: Object,
        required: true
      },
      user: {
        type: Object,
        required: true
      },
      labels: {
        type: Array,
        required: true
      },
      mostVisits: {
        type: Array,
        required: true
      }
    },
    methods: {
      getPageTitle(article) {
        return [{
            title: '首页',
            to: {
              name: 'index'
            }
          },
          {
            title: article.articleType.name,
            to: {
              name: 'article-type-id',
              params: {
                id: article.articleType.id
              }
            }
          },
          {
            title: article.title,
            to: {
              name: 'article-detail-id',
              params: {
                id: article.id
              }
            }
          }
        ]
      }
    }
  }
</script>
