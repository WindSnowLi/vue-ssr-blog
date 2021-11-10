<template>
  <div class="widget panel">
    <!-- 组件标题 -->
    <h4 class="widget-title">
      最新评论
    </h4>
    <ul class="new-comment-list">
      <li
        v-for="(item,i) in comment_list"
        :key="i"
      >
        <nuxt-link class="title single-line" :to="{ name:'article-detail-id',params:{ id: item.target.id } }">
          {{ item.target.title }}
        </nuxt-link>
        <p class="single-line">
          <nuxt-link :to="{ name: 'about' }">
            <img :src="item.user.avatar" alt="" class="meta-author img-fluid">
            {{ item.user.nickname }}
          </nuxt-link>
          <span>{{ item.content }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecentComment } from '../api/comment'

export default {
  name: 'AsideNewComments',
  data() {
    return {
      comment_list: []
    }
  },
  created() {
    getRecentComment(5).then((data) => {
      this.comment_list = data
    })
  }
}
</script>

<style scoped>
ol, ul {
  list-style: none;
}

li {
  text-align: left;
  margin-top: 16px;
}

ul.new-comment-list li .title {
  line-height: 22px;
  margin-bottom: 2px;
  color: #2fb3ee;
  display: block;
}
</style>
