<template>
  <header class="header">
    <div class="header-fixed">
      <div class="container-fluid pl-120 pr-120 position-relative">
        <div class="row d-flex align-items-center">
          <div class="col-lg-3 col-md-4 col-6">
            <!-- Logo -->
            <div class="navbar-brand">
              <nuxt-link :to="{ name: 'index' }">{{ topbarTitle }}</nuxt-link>
            </div>
            <!-- End of Logo -->
          </div>

          <div class="col-lg-9 col-md-8 col-6 d-flex justify-content-end position-static">
            <!-- Nav Menu -->
            <div class="nav-menu-cover">
              <ul class="nav nav-menu">
                <li class="navbar-brand">
                  <nuxt-link :to="{ name: 'index' }">首页</nuxt-link>
                </li>
                <li class="navbar-brand">
                  <nuxt-link :to="{ name: 'article-type' }">分类</nuxt-link>
                </li>
                <li class="navbar-brand">
                  <nuxt-link :to="{ name: 'article-tag' }">标签</nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End of Nav Menu -->

            <!-- Mobile Menu -->
            <div class="mobile-menu-cover">
              <ul class="nav mobile-nav-menu">
                <!--
                              <li class="search-toggle-open">
                                  <img src="/images/search-icon.svg" alt="" class="img-fluid svg">
                              </li>
                          -->
                <li class="search-toggle-close hide">
                  <img src="/images/close.svg" alt="" class="img-fluid">
                </li>
                <li class="nav-menu-toggle">
                  <img src="/images/menu-toggler.svg" alt="" class="img-fluid svg">
                </li>
              </ul>
            </div>
            <!-- End of Mobile Menu -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBars',
    data() {
      return {}
    },
    props: {
      topbarTitle: {
        type: String,
        default: ''
      }
    }
  }
</script>
