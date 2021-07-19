<template>
  <div class="widget widget-about panel">
    <!-- 组件内容 -->
    <div class="widget-content">
      <!-- 作者图片 -->
      <div class="author-image">
        <img :src="user.avatar" alt="" class="img-fluid">
      </div>
      <!-- 作者名字 -->
      <div class="author-name text-center">
        <a href="#"> {{ user.nickname }} </a>
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
