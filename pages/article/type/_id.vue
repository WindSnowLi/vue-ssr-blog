<template>
  <article-type :articles="articles" :label="label"></article-type>
</template>

<script>
  import {
    findUserByUserId,
    getArticlesByType,
    getTypeById
  } from '@/api/article.js'
  export default {
    async asyncData({
      params
    }) {
      let [user, articles, label] = await Promise.all([
        findUserByUserId(),
        getArticlesByType(params.id),
        getTypeById(params.id),
      ])
      return {
        user: user,
        articles: articles,
        label: label
      }
    },
    head() {
      return {
        title: this.user.nickname + '的' + this.label.name + '文章',
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
            content: this.user.nickname + '的' + this.label.name + '文章'
          }
        ]
      }
    }
  }
</script>
