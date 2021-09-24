<template>
  <div>
    <home-page
      :user="user"
      :most-visits="mostVisits"
      :labels="labels"
      :recent-articles="recentArticles"
    />
    <div v-html="uiConfig.footer" />
  </div>
</template>

<script>
import {
  getVisitorInfo
} from '../api/user'
import { getMostPV, getRecentArticles } from '../api/article'
import { getAllLabel } from '../api/article-label'
import { getUiConfig } from '../api/sys'

export default {
  layout: 'index',
  async asyncData() {
    const [user, mostVisits, labels, recentArticles, uiConfig] = await Promise.all([
      getVisitorInfo(),
      getMostPV(),
      getAllLabel(),
      getRecentArticles(),
      getUiConfig()
    ])
    return {
      user,
      mostVisits,
      labels,
      recentArticles: recentArticles.items,
      uiConfig
    }
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
