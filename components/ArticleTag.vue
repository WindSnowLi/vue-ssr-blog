<template>
  <div>
    <page-title title="首页" :routeList="getPageTitle()"></page-title>
    <blog-grid-3 :articles="articles"></blog-grid-3>
  </div>
</template>

<script>
  import PageTitle from './PageTitle'
  import {
    getArticlesByLabel,
    getLabelById
  } from '@/api/article.js'
  export default {
    name: 'ArticleTag',
    data() {
      return {
        articles: [],
        label: {
          //label名称
          name: "",
          //封面
          coverPic: "",
          //浏览次数
          visitsCount: 0,
          //所属文章总数
          num: 0
        }
      }
    },
    methods: {
      getPageTitle() {
        return [{
            title: '首页',
            to: {
              name: 'index'
            }
          },
          {
            title: '标签',
            to: {
              name: 'article-tag'
            }
          },
          {
            title: this.label.name,
            to: {
              name: 'article-tag-id',
              params: {
                id: this.$route.params.id
              }
            }
          }
        ]
      }
    },
    created() {
      const _self = this
      getArticlesByLabel(this.$route.params.id).then(data => {
        _self.articles = data
      })
      getLabelById(this.$route.params.id).then(data => {
        _self.label = data
      })
    },
  }
</script>
