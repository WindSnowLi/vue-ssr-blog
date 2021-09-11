<template>
  <home-page
    :user="user"
    :most-visits="mostVisits"
    :labels="labels"
    :recent-articles="recentArticles"
  />
</template>

<script>
import {
  getVisitorInfo
} from '../api/user'
import { getMostPV, getRecentArticles } from '../api/article'
import { getAllLabel } from '../api/article-label'
export default {
  layout: 'index',
  async asyncData() {
    const [user, mostVisits, labels, recentArticles] = await Promise.all([
      getVisitorInfo(),
      getMostPV(),
      getAllLabel(),
      getRecentArticles()
    ])
    return {
      user,
      mostVisits,
      labels,
      recentArticles: recentArticles.items
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
