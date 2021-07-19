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
                  <h2>{{articleDetail.article.title}}</h2>
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
            <div class="markdown-body">
              <mark-down v-bind:md="articleDetail.article.content"></mark-down>
            </div>
            <!-- End of Post Content -->

            <!-- 标签 -->
            <div class="post-all-tags">
              <template v-for="(label,i) in articleDetail.article.labels">
                <nuxt-link :value="label" :key="i" :to="{ name: 'article-tag-id', params: { id: label.id } }">
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
  import MySidebar from './MySidebar'
  import MarkDown from './MarkDown'
  import PageTitle from './PageTitle'
  import {
    getMostVisits,
    findUserByUserId,
    getAllLabel,
    getArticleById
  } from '@/api/article.js'

  export default {
    name: 'Detail',
    data() {
      return {
        articleDetail: {
          user: {
            //ID
            id: "",
            //账户
            account: "",
            //昵称
            nickname: "",
            //头像链接
            avatar: "",
            //QQ
            qq: "",
            //个人介绍
            introduction: "",
          },
          article: {
            content: "",
            coverPic: "",
            createTime: "",
            articleType: {
              //label ID
              id: 0,
              //label名称
              name: "",
              //封面
              coverPic: "",
              //浏览次数
              visitsCount: "",
              //所属文章总数
              num: ""
            },
            id: 0,
            labels: [{
              id: 0,
              name: "",
              visitsCount: 0
            }],
            status: "",
            summary: "",
            title: "",
            updateTime: "",
            visitsCount: 0
          }
        },
        user: {
          //ID
          id: "",
          //账户
          account: "",
          //昵称
          nickname: "",
          //头像链接
          avatar: "",
          //QQ
          qq: "",
          //个人介绍
          introduction: "",
        },
        labels: [],
        mostVisits: [],
        show: true
      }
    },
    created: function() {
      const _self = this
      getArticleById(this.$route.params.id).then(data => {
        _self.articleDetail.article = data.article
        _self.articleDetail.user = data.user
      })
      findUserByUserId().then(data => {
        _self.user = data
      })
      getMostVisits().then(data => {
        _self.mostVisits = data
      })
      getAllLabel().then(data => {
        _self.labels = data
      })
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
            title: this.articleDetail.article.articleType.name,
            to: {
              name: 'article-type-id',
              params: {
                id: this.articleDetail.article.articleType.id
              }
            }
          },
          {
            title: this.articleDetail.article.title,
            to: {
              name: 'article-detail-id',
              params: {
                id: this.articleDetail.article.id
              }
            }
          }
        ]
      }
    }
  }
</script>
