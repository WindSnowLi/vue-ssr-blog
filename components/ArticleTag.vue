<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()"></page-title>
    <blog-grid-3 :articles="articles"></blog-grid-3>
  </div>
</template>

<script>
  import PageTitle from './PageTitle'
  export default {
    name: 'ArticleTag',
    components: {
      PageTitle
    },
    props: {
      articles: {
        type: Array,
        required: true
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
    }
  }
</script>
