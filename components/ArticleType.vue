<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()" />
    <blog-grid-3 :articles="articles" />
  </div>
</template>

<script>
import PageTitle from './PageTitle'
export default {
  name: 'ArticleType',
  components: {
    PageTitle
  },
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
