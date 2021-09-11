<template>
  <div class="widget widget-about panel">
    <!-- 组件内容 -->
    <div class="widget-content">
      <!-- 作者图片 -->
      <div class="author-image">
        <nuxt-link :to="{ name: 'about' }"><img :src="user.avatar" alt="" class="img-fluid"></nuxt-link>
      </div>

      <!-- 作者名字 -->
      <div class="author-name text-center">
        <nuxt-link :to="{ name: 'about' }">{{ user.nickname }}</nuxt-link>
      </div>

      <!-- 作者介绍 -->
      <div class="author-text text-center">
        {{ user.introduction }}
      </div>
    </div>
    <!-- 组件内容结束 -->
  </div>
</template>

<script>
export default {
  name: 'AuthorWidget',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
