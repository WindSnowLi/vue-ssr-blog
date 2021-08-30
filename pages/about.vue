<template>
  <about-me :content="about" :comments="comments" :about-comment="sundry.aboutComment"></about-me>
</template>

<script>
import {findUserByUserId, getAboutByUserId} from "../api/user";
import {getTargetComments} from "../api/comment";
import {getSundry} from "../api/sys";

  export default {
    layout: 'index',
    async asyncData() {
      let [user, about, comments, sundry] = await Promise.all([
        findUserByUserId(),
        getAboutByUserId(),
        getTargetComments('ABOUT', 'PASS'),
        getSundry()
      ])
      return {
        user,
        about,
        comments,
        sundry: sundry.sundry
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
