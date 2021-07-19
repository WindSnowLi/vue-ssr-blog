<template>
  <div>
    <page-title title="首页" :routeList="getPageTitle()"></page-title>
    <blog-grid-3 :articles="articles"></blog-grid-3>
  </div>
</template>

<script>
  import {
    getArticlesByType,
    getTypeById
  } from '@/api/article.js'
  import PageTitle from './PageTitle'
  export default {
    name: 'ArticleType',
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
            title: '分类',
            to: {
              name: 'article-type'
            }
          },
          {
            title: this.label.name,
            to: {
              name: 'article-type-id',
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
      getArticlesByType(this.$route.params.id).then(data => {
        _self.articles = data
      })
      getTypeById(this.$route.params.id).then(data => {
        _self.label = data
      })
    }
  }
</script>
