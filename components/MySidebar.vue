<template>
  <div class="col-lg-3">
    <div class="pt-88">

      <div class="my-sidebar">
        <!-- 最近更新 -->
        <art-sidebar :articles="mostVisits" title="最多访问" />
        <!-- 最近更新结束 -->

        <!-- 最多访问组件 -->
        <art-sidebar :articles="recentArticles" title="最近更新" />
        <!-- 最多访问组件结束 -->

        <!-- 标签组件 -->
        <tab-widget :labels="labels" />
        <!-- 标签组件结束 -->
        <!-- 最新评论 -->
        <aside-new-comments />
        <!-- 最新评论结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import TabWidget from './TabWidget'
import ArtSidebar from './ArtSidebar'
import AsideNewComments from './AsideNewComments'
export default {
  name: 'MySidebar',
  components: {
    AsideNewComments,
    ArtSidebar,
    TabWidget
  },
  props: {
    mostVisits: {
      type: Array,
      required: true
    },
    recentArticles: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  }
}
</script>
