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
    props: {
      articles: {
        type: Array,
        default: () => {
          return []
        }
      },
      label: {
        type: Object,
        required: true
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
    }
  }
</script>
