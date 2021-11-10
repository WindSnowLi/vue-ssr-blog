import cheerio from 'cheerio'
import sitemap from './config/sitemap'

export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-ssr-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: '/js/jquery-3.6.0.min.js',
      ssr: false
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'mavon-editor/dist/css/index.css',
    'animate.css/animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/font-awesome.js',
    ssr: false
  },
  {
    src: '~/plugins/magnific-popup/jquery.magnific-popup.min.js',
    ssr: false
  },
  {
    src: '~/plugins/js/scripts.js',
    ssr: false
  },
  {
    src: '~/plugins/js/background.js',
    ssr: false
  },
  {
    src: '~plugins/vue-markdown.js',
    ssr: false
  },
  {
    src: '~plugins/vue-append.js',
    ssr: false
  },
  {
    src: '~plugins/js/utils.js',
    ssr: false
  },
  {
    src: '~plugins/js/slider/main.js',
    ssr: false
  }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap'
  ],
  fontawesome: {
    component: 'fa',
    imports: [{
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    },
    {
      set: '@fortawesome/free-regular-svg-icons',
      icons: ['far']
    },
    {
      set: '@fortawesome/free-brands-svg-icons',
      icons: ['fab']
    }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 解决引用文件过大会报错的问题
    babel: {
      compact: false
    },
    // 抽离CSS
    extractCSS: true
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  },
  hooks: {
    // 删除meta信息的无关标签（为了百度验证）
    'render:route': (url, result) => {
      const $ = cheerio.load(result.html, {
        decodeEntities: false
      })
      $(`meta`).removeAttr('data-n-head')
      result.html = $.html()
    }
  },
  // target: 'static', // default is 'server'
  sitemap
}
