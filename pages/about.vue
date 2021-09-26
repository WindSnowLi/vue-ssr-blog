<template>
  <about-me :content="about" :comments="comments" :about-comment="baseConfig.aboutComment" />
</template>

<script>
import { getVisitorInfo, getAboutByUserId } from '../api/user'
import { getTargetComments } from '../api/comment'
import { getFixedConfig } from '../api/sys'

export default {
  layout: 'index',
  async asyncData() {
    const [user, about, comments, baseConfig] = await Promise.all([
      getVisitorInfo(),
      getAboutByUserId(),
      getTargetComments('ABOUT', 'PASS'),
      getFixedConfig()
    ])
    return {
      user,
      about,
      comments,
      baseConfig: baseConfig.sys
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
  }
}
</script>
<style>
  @import "../static/css/style.css";
  @import "../static/css/custom.css";
</style>
