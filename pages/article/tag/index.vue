<template>
  <tag :labels="labels"></tag>
</template>

<script>
  import {
    getAllLabel
  } from '@/api/article.js'
  import {
    findUserByUserId
  } from '@/api/user.js'
  export default {
    layout: 'index',
    async asyncData() {
      let [user, labels] = await Promise.all([
        findUserByUserId(),
        getAllLabel(),
      ])
      let keywords = ""
      labels.forEach(label => {
        keywords += label.name + ','
      });
      return {
        user,
        labels,
        keywords
      }
    },
    head() {
      return {
        title: this.user.nickname + '的文章标签',
        meta: [{
            name: 'keywords',
            content: this.keywords
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
