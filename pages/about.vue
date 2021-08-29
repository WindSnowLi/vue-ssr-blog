<template>
  <about-me :content="about"></about-me>
</template>

<script>
import {findUserByUserId, getAboutByUserId} from "../api/user";

  export default {
    layout: 'index',
    async asyncData() {
      let [user, about] = await Promise.all([
        findUserByUserId(),
        getAboutByUserId()
      ])
      return {
        user,
        about
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
