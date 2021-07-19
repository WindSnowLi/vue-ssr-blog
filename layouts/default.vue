<template>
  <div>
    <section class="hidden-xs">
      <ul class="cb-slideshow">
        <!-- 背景轮播图功能模块 -->
        <div id="background-list"></div>
        <!-- 背景轮播图功能模块 -->
      </ul>
    </section>
    <!-- Header -->
    <header-bar :topbar-title="uiConfig.topbar_title"></header-bar>
    <!-- End of Header -->
    <main>
      <nuxt />
    </main>
    <back-top></back-top>
  </div>
</template>

<script>
  import {
    getConfigByUserId
  } from '@/api/article.js'
  import { background } from '/static/js/background.js'
  import HeaderBar from '@/components/HeaderBar'
  import BackTop from '@/components/BackTop'
  export default {
    components: {
      HeaderBar,
      BackTop
    },
    data() {
      return {
        uiConfig: {
          background_list: [],
          footer: "",
          main_title: "",
          topbar_title: ""
        }
      }
    },
    methods: {
      getConfigByUserId: function(callback) {
        getConfigByUserId(callback)
      }
    },
    created: function() {
      const _self = this
      getConfigByUserId().then(function(data) {
        _self.uiConfig = data
        let imgs = (data.background_list + '\n\n').split('\n')
        let imgList = []
        imgs.forEach(element => {
          if (Object.keys(element).length != 0) {
            imgList.push(element)
          }
        });
        _self.uiConfig.background_list = imgList
        background(_self.uiConfig.background_list, 'background-list')
      })
    }
  }
</script>
