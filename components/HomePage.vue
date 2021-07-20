<template>
  <div class="container pt-40 pb-90">
    <div class="row">
      <div class="col-lg-8">
        <!-- 最近热门 -->
        <list-sidebar :articles="recentArticles"></list-sidebar>
        <!-- 最近热门结束  -->

        <!-- 历史记录 -->
        <list-sidebar title="历史记录" v-bind:articles="historyArticles"></list-sidebar>
        <!-- 历史记录结束 -->

        <!-- 分页 -->
        <paging :total="total" :page="page" :jump="getHistoryArticles"></paging>
        <!-- 分页结束 -->
      </div>
      <!-- 侧边栏信息 -->
      <my-sidebar v-bind:user="user" v-bind:most-visits="mostVisits" v-bind:labels="labels"></my-sidebar>
      <!-- 侧边栏信息结束 -->
    </div>
  </div>
</template>

<script>
  import {
    getHistoryArticles,
    getRecentArticles,
    getMostVisits,
    findUserByUserId,
    getAllLabel
  } from '@/api/article.js'
  import ListSidebar from './ListSidebar'
  import paging from './paging'
  import MySidebar from './MySidebar'
  export default {
    name: 'HomePage',
    components: {
      ListSidebar,
      paging,
      MySidebar
    },
    data() {
      return {
        recentArticles: [],
        total: 0,
        page: 1,
        limit: 9,
        historyArticles: [],
        labels: [],
        mostVisits: []
      }
    },
    props: {
      user: {
        type: Object,
        required: true,
      }
    },
    methods: {
      getHistoryArticles(page) {
        const _self = this
        getHistoryArticles(1, page, _self.limit).then(data => {
          _self.page = page
          _self.historyArticles = data.items
          _self.total = Math.ceil(data.total * 1.0 / _self.limit)
        })
      }
    },
    created() {
      const _self = this
      getRecentArticles().then(data => {
        _self.recentArticles = data.items
      })
      this.getHistoryArticles(this.page)
      // 最多访问量侧边栏
      getMostVisits().then(data => {
        _self.mostVisits = data
      })
      // 所有标签
      getAllLabel().then(data => {
        _self.labels = data
      })
    }
  }
</script>
<style>
  @import "../static/css/style.css";
</style>
