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
    <header-bar :topbar-title="uiConfig.topbar_title" :admin-page="sysConfig.admin_url"></header-bar>
    <!-- End of Header -->
    <main>
      <nuxt />
    </main>
    <footer-line :icp="sysConfig.filing_icp" :security="sysConfig.filing_security"></footer-line>
    <back-top></back-top>
    <div v-if="uiConfig.footer" v-append="uiConfig.footer"></div>
  </div>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import BackTop from "../components/BackTop";
  import FooterLine from "../components/FooterLine";
  import {getSysConfig, getUiConfig} from "../api/sys";
  import {background} from "../plugins/js/background";

  export default {
    components: {
      HeaderBar,
      BackTop,
      FooterLine
    },
    data() {
      return {
        uiConfig: {},
        sysConfig: {}
      }
    },
    created() {
      const _self = this
      getUiConfig().then(response => {
        _self.uiConfig = response
        let imgs = (_self.uiConfig.background_list + '\n\n').split('\n')
        let imgList = []
        imgs.forEach(element => {
          if (Object.keys(element).length !== 0) {
            imgList.push(element)
          }
        });
        _self.uiConfig.background_list = imgList
        background(_self.uiConfig.background_list, 'background-list')
      })
      getSysConfig().then(response => {
        _self.sysConfig = response.sys
      })
    }
  }
</script>
