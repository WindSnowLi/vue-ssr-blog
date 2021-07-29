<template>
  <article-tag :articles="articles" :label="label"></article-tag>
</template>

<script>
  import {
    findUserByUserId,
    getArticlesByLabel,
    getLabelById,
  } from '@/api/article.js'
  export default {
    layout: 'index',
    async asyncData({
      params
    }) {
      let [user, articles, label] = await Promise.all([
        findUserByUserId(),
        getArticlesByLabel(params.id),
        getLabelById(params.id),
      ])
      return {
        user,
        articles,
        label
      }
    },
    head() {
      return {
        title: this.user.nickname + '的文章标签',
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
            content: this.user.nickname + '的' + this.user.nickname + '系列文章'
          }
        ]
      }
    }
  }
</script>
