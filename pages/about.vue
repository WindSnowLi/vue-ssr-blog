<template>
  <about-me :content="uiConfig.about"></about-me>
</template>

<script>
  import {
    findUserByUserId,
    getConfigByUserId
  } from '@/api/article.js'
  export default {
    async asyncData() {
      let [user, uiConfig] = await Promise.all([
        findUserByUserId(),
        getConfigByUserId(1)
      ])
      return {
        user,
        uiConfig
      }
    },
    head() {
      return {
        title: '关于' + this.user.nickname,
        meta: [{
          name: 'keywords',
          content: this.user.nickname + '的个人博客'
        },
        {
          name: 'author',
          content: this.user.nickname
        },
        {
          name: 'description',
          content: this.user.nickname + '的个人博客'
        }
        ]
      }
    },
  }
</script>
<style>
  @import "../static/css/style.css";
  @import "../static/css/custom.css";
</style>
