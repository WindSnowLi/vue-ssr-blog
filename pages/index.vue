<template>
  <home-page
    :user="user"
    :most-visits="mostVisits"
    :labels="labels"
    :recent-articles="recentArticles"
  >
  </home-page>
</template>

<script>
  import {
    findUserByUserId
  } from "../api/user";
  import {getMostVisits, getRecentArticles} from "../api/article";
  import {getAllLabel} from "../api/article-label";
  export default {
    layout: 'index',
    async asyncData() {
      let [user, mostVisits, labels, recentArticles] = await Promise.all([
        findUserByUserId(),
        getMostVisits(),
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
    },
  }
</script>
<style>
  @import "../static/css/style.css";
  @import "../static/css/custom.css";
</style>
