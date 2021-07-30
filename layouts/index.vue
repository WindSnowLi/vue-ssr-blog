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
    <footer-line :icp="uiConfig.filing_icp" :security="uiConfig.filing_security"></footer-line>
    <back-top></back-top>
  </div>
</template>

<script>
  import {
    getConfigByUserId
  } from '@/api/article.js'
  import {
    background
  } from '@/plugins/js/background.js'
  import HeaderBar from '@/components/HeaderBar'
  import BackTop from '@/components/BackTop'
  import FooterLine from '@/components/FooterLine'
  export default {
    components: {
      HeaderBar,
      BackTop,
      FooterLine
    },
    data() {
      return {
        uiConfig: {
          background_list: [],
          footer: "",
          main_title: "",
          topbar_title: "",
          about: "",
          filing_icp: "",
          filing_security: ""
        }
      }
    },
    created() {
      const _self = this
      getConfigByUserId(1).then(data => {
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
