<template>
  <div class="col-lg-4">
    <div class="pt-88">

      <div class="my-sidebar">
        <!-- 作者组件 -->
        <author-widget :user="user" />
        <!-- 作者组件结束 -->

        <!-- 最近更新 -->
        <art-sidebar :articles="mostVisits" title="最多访问" />
        <!-- 最近更新结束 -->

        <!-- 最多访问组件 -->
        <art-sidebar :articles="recentArt" title="最近更新" />
        <!-- 最多访问组件结束 -->

        <!-- 标签组件 -->
        <tab-widget :labels="labels" />
        <!-- 标签组件结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import AuthorWidget from './AuthorWidget'
import TabWidget from './TabWidget'
import ArtSidebar from './ArtSidebar'
export default {
  name: 'MySidebar',
  components: {
    ArtSidebar,
    AuthorWidget,
    TabWidget
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    mostVisits: {
      type: Array,
      required: true
    },
    recentArt: {
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
