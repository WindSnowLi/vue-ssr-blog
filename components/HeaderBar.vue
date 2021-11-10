<template>
  <div>
    <div class="menu-wrap">
      <div class="widget widget-about">
        <!-- 组件内容 -->
        <div class="widget-content">
          <!-- 作者图片 -->
          <div class="author-image">`
            <nuxt-link style="width: 100%; height: 100%" :to="{ name: 'about' }">
              <div class="author-avatar">
                <img class="img-fluid" :src="user.avatar" alt="头像">
              </div>
            </nuxt-link>
          </div>

          <!-- 作者名字 -->
          <div class="author-name text-center">
            <nuxt-link class="h-opulent-color-animate" :to="{ name: 'about' }">{{ user.nickname }}</nuxt-link>
          </div>
        </div>
        <!-- 组件内容结束 -->
      </div>
      <nav class="menu">
        <div class="icon-list">
          <nuxt-link :to="{ name: 'index' }">
            <fa :icon="['fa', 'home']" />
            <span>首页</span>
          </nuxt-link>
          <nuxt-link :to="{ name: 'article-type' }">
            <fa :icon="['fa', 'bookmark']" />
            <span>分类</span>
          </nuxt-link>
          <nuxt-link :to="{ name: 'article-tag' }">
            <fa :icon="['fa', 'tags']" />
            <span>标签</span>
          </nuxt-link>
          <nuxt-link :to="{ name: 'about' }">
            <fa :icon="['fa', 'user-plus']" />
            <span>关于</span>
          </nuxt-link>
          <nuxt-link :to="{ name: 'links' }">
            <fa :icon="['fa', 'id-card']" />
            <span>友链</span>
          </nuxt-link>
          <a v-if="adminPage" :href="adminPage">
            <fa :icon="['fa', 'cog']" />
            <span>后台</span>
          </a>
        </div>
      </nav>
      <button id="close-button" class="close-button">关闭菜单</button>
    </div>
    <button id="open-button" class="menu-button">打开菜单</button>
  </div>
</template>

<script>
import { headerIni } from '../plugins/js/slider/main'

export default {
  name: 'HeaderBars',
  props: {
    topbarTitle: {
      type: String,
      default: ''
    },
    adminPage: {
      type: String,
      default: ''
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    if (process.client) {
      headerIni()
    }
  }
}
</script>

<style scoped>
@import "static/css/slider/normalize.css";
@import "static/css/slider/menu_sideslide.css";

.fs-23 {
    font-size: 23px;
  }

</style>
