<template>
  <detail :articleDetail="articleDetail" :user="user" :labels="labels" :mostVisits="mostVisits"></detail>
</template>

<script>
  import {
    getMostVisits,
    findUserByUserId,
    getAllLabel,
    getArticleById
  } from '@/api/article.js'
  export default {
    layout: 'index',
    async asyncData({
      params
    }) {
      let [articleDetail, user, labels, mostVisits] = await Promise.all([
        getArticleById(params.id),
        findUserByUserId(),
        getAllLabel(),
        getMostVisits(),
      ])
      return {
        articleDetail,
        user,
        labels,
        mostVisits
      }
    },
    head() {
      return {
        title: this.articleDetail.article.title,
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
