<template>
  <categories :labels="labels"></categories>
</template>

<script>
  import {
    findUserByUserId,
    getAllTypeByUserId
  } from '@/api/article.js'
  export default {
    async asyncData() {
      let [user, labels] = await Promise.all([
        findUserByUserId(),
        getAllTypeByUserId(),
      ])
      let keywords = ""
      labels.forEach(label => {
        keywords += label.name + ','
      });
      return {
        user: user,
        labels: labels
      }
    },
    head() {
      return {
        title: this.user.nickname + '的文章分类',
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
            content: this.user.nickname + '的文章分类'
          }
        ]
      }
    },
  }
</script>
