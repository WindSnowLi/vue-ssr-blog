<template>
  <div>
    <article-type :articles="articles" :label="label" />
    <!-- 分页 -->
    <paging :total="total" :jump="getArticlesByType" :limit="limit" />
    <!-- 分页结束 -->
  </div>
</template>

<script>
import { getVisitorInfo } from '../../../api/user'
import { getArticlesByType, getTypeById } from '../../../api/article'

export default {
  layout: 'index',
  async asyncData({
    params
  }) {
    const limit = 15
    const [user, articles, label] = await Promise.all([
      getVisitorInfo(),
      getArticlesByType(params.id, 1, limit),
      getTypeById(params.id)
    ])
    return {
      user,
      articles: articles.items,
      label,
      total: articles.total,
      limit
    }
  },
  methods: {
    getArticlesByType(page) {
      const _self = this
      getArticlesByType(this.$route.params.id, page, _self.limit).then((data) => {
        _self.articles = data.items
        _self.total = data.total
      })
    }
  },
  head() {
    return {
      title: '首页-分类-' + this.label.name,
      meta: [{
        name: 'keywords',
        content: this.label.name
      },
      {
        name: 'author',
        content: this.user.nickname
      },
      {
        name: 'description',
        content: this.label.describe || this.user.nickname + '的' + this.label.name + '文章'
      }
      ]
    }
  }
}
</script>
