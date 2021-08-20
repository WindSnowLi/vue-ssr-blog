<template>
  <detail
    :articleDetail="articleDetail"
    :user="user"
    :labels="labels"
    :mostVisits="mostVisits"></detail>
</template>

<script>
import {
  getMostVisits,
  getAllLabel,
  getArticleById
} from '@/api/article.js'

export default {
  layout: 'index',
  async asyncData({
                    params
                  }) {
    let [articleDetail, labels, mostVisits] = await Promise.all([
      getArticleById(params.id),
      getAllLabel(),
      getMostVisits(),
    ])
    return {
      articleDetail,
      user: articleDetail.user,
      labels,
      mostVisits
    }
  },
  head() {
    return {
      title: this.articleDetail.article.title + '-' + this.user.nickname,
      meta: [{
        name: 'keywords',
        content: this.articleDetail.article.title
      },
        {
          name: 'author',
          content: this.user.nickname
        },
        {
          name: 'description',
          content: this.articleDetail.article.summary
        }
      ]
    }
  }
}
</script>
