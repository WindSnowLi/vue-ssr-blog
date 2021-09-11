<template>
  <div class="col-lg-4">
    <div class="pt-88">

      <div class="my-sidebar">
        <!-- 作者组件 -->
        <author-widget :user="user" />
        <!-- 作者组件结束 -->

        <!-- 最多访问组件 -->
        <most-visits :articles="mostVisits" />
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
import MostVisits from './MostVisits'
import TabWidget from './TabWidget'
export default {
  name: 'MySidebar',
  components: {
    AuthorWidget,
    MostVisits,
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
    labels: {
      type: Array,
      required: true
    }
  }
}
</script>
