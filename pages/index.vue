<template>
  <home-page :user="user"></home-page>
</template>

<script>
  import {
    findUserByUserId
  } from '@/api/user.js'
  export default {
    layout: 'index',
    asyncData() {
      return findUserByUserId().then(res => {
        return {
          user: res
        }
      })
    },
    head() {
      return {
        title: this.user.nickname + '的个人博客',
        meta: [{
          name: 'keywords',
          content: this.user.nickname + '的个人博客'
        },
        {
          name: 'author',
          content: this.user.nickname
        },
        {
          name: 'robots',
          content: 'index,follow'
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
