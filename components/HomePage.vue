<template>
  <div class="container pt-40 pb-90">
    <div class="row">
      <div class="col-lg-8">
        <!-- 最近热门 -->
        <list-sidebar :articles="recentArticles"></list-sidebar>
        <!-- 最近热门结束  -->

        <!-- 历史记录 -->
        <list-sidebar title="历史记录" :articles="historyArticles"></list-sidebar>
        <!-- 历史记录结束 -->

        <!-- 分页 -->
        <paging :total="total" :page="page" :jump="getHistoryArticles"></paging>
        <!-- 分页结束 -->
      </div>
      <!-- 侧边栏信息 -->
      <my-sidebar :user="user" :most-visits="mostVisits" :labels="labels"></my-sidebar>
      <!-- 侧边栏信息结束 -->
    </div>
  </div>
</template>

<script>
  import {
    getHistoryArticles,
    getRecentArticles,
    getMostVisits,
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
        total: 0,
        page: 1,
        limit: 9,
        historyArticles: []
      }
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
      mostVisits: {
        type: Array,
        required: true
      },
      labels: {
        type: Array,
        required: true
      },
      recentArticles: {
        type: Array,
        required: true
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
      this.getHistoryArticles(this.page)
    }
  }
</script>
<style>
  @import "../static/css/style.css";
</style>
