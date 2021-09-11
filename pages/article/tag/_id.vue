<template>
  <div>
    <article-tag :articles="articles" :label="label"></article-tag>
    <!-- 分页 -->
    <paging :total="total" :jump="getArticlesByLabel" :limit="limit"></paging>
    <!-- 分页结束 -->
  </div>
</template>

<script>
import {getVisitorInfo} from "../../../api/user";
import {getArticlesByLabel, getLabelById} from "../../../api/article";

export default {
  layout: 'index',
  async asyncData({
                    params
                  }) {
    let limit = 15
    let [user, articles, label] = await Promise.all([
      getVisitorInfo(),
      getArticlesByLabel(params.id, 1, limit),
      getLabelById(params.id),
    ])
    return {
      user,
      articles: articles.items,
      label,
      total: articles.total,
      limit
    }
  },
  head() {
    return {
      title: '首页-标签-' + this.label.name,
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
  },
  methods: {
    getArticlesByLabel(page) {
      const _self = this
      getArticlesByLabel(this.$route.params.id, page, _self.limit).then(data => {
        _self.articles = data.items
        _self.total = data.total
      })
    }
  }
}
</script>
