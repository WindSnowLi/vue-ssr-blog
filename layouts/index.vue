<template>
  <div>
    <div v-if="particle">
      <div v-for="(count) in 300" :key="count" class="circle-container">
        <div class="circle" />
      </div>
    </div>
    <section v-if="!particle" class="hidden-xs">
      <ul class="cb-slideshow">
        <!-- 背景轮播图功能模块 -->
        <div id="background-list" />
        <!-- 背景轮播图功能模块 -->
      </ul>
    </section>
    <!-- Header -->
    <header-bar :topbar-title="uiConfig.topbar_title" :admin-page="sysConfig.admin_url" :user="user" />
    <!-- End of Header -->
    <main>
      <nuxt />
    </main>
    <footer-line
      :icp="sysConfig.filing_icp"
      :security="sysConfig.filing_security"
    />
    <back-top />
    <div v-append="uiConfig.include" />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import BackTop from '../components/BackTop'
import FooterLine from '../components/FooterLine'
import { getFixedConfig, getUiConfig } from '../api/sys'
import { background } from '../plugins/js/background'
import { getVisitorInfo } from '../api/user'

export default {
  components: {
    HeaderBar,
    BackTop,
    FooterLine
  },
  data() {
    return {
      particle: false,
      uiConfig: {},
      sysConfig: {},
      user: {}
    }
  },
  created() {
    const _self = this
    getUiConfig().then((response) => {
      _self.uiConfig = response
      const imgs = (_self.uiConfig.background_list + '\n\n').split('\n')
      const imgList = []
      imgs.forEach((element) => {
        if (Object.keys(element).length !== 0) {
          imgList.push(element)
        }
      })
      if (imgList.length === 0) {
        _self.particle = true
      } else {
        _self.uiConfig.background_list = imgList
        background(_self.uiConfig.background_list, 'background-list')
      }
    })
    getFixedConfig().then((response) => {
      _self.sysConfig = response.sys
    })
    getVisitorInfo().then((response) => {
      _self.user = response
    })
  }
}
</script>

<style scoped>
@import "static/css/particle/style.css";
</style>
