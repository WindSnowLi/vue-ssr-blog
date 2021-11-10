<template>
  <div class="container pt-40 pb-90">
    <div class="row">
      <div class="col-lg-9">
        <!-- 历史记录 -->
        <list-sidebar :articles="historyArticles" />
        <!-- 历史记录结束 -->

        <!-- 分页 -->
        <paging :total="total" :jump="getHistoryArticles" :limit="limit" />
        <!-- 分页结束 -->
      </div>
      <!-- 侧边栏信息 -->
      <my-sidebar :most-visits="mostVisits" :labels="labels" :recent-articles="recentArticles" />
      <!-- 侧边栏信息结束 -->
    </div>
  </div>
</template>

<script>
import { getHistoryArticles } from '../api/article'
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
  props: {
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
  data() {
    return {
      total: 0,
      limit: 20,
      historyArticles: []
    }
  },
  created() {
    this.getHistoryArticles(1)
  },
  methods: {
    getHistoryArticles(page) {
      const _self = this
      getHistoryArticles(page, _self.limit).then((data) => {
        _self.historyArticles = data.items
        _self.total = data.total
      })
    }
  }
}
</script>
<style>
  @import "../static/css/style.css";
</style>
