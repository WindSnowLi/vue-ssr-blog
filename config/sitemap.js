import {
  getArticleIdByPage
} from '../api/article.js'

const sitemap = {
  path: '/sitemap.xml', // 生成的文件路径
  hostname: 'https://127.0.0.1:8888/', // 网址
  cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
  gzip: true, // 生成 .xml.gz 压缩的 sitemap
  generate: false, // 允许使用 nuxt generate 生成
  // 排除不要页面
  exclude: [
    '/404', //  这里的路径相对 hostname
    '/about'
  ],
  // xml默认的配置
  defaults: {
    changefreq: 'always',
    lastmod: new Date()
  },
  // 需要生成的xml数据, return 返回需要给出的xml数据
  routes: async () => {

    let rs = [];
    // 从后台获取数据,拼接url生成更多的xml数据
    const data = await getArticleIdByPage(1, 100)
    const routes = [
      {
        url: "/",  //  这里的路径相对 hostname
        changefreq: "always",
        lastmod: new Date()
      }
    ]
    if (data) {
      let arr = []
      data.forEach(item => arr.push({
        url: "/article/detail/" + item.id,
        lastmod: new Date(item.updateTime),
        changefreq: "yearly"
      }))
      rs = routes.concat(arr)
    }
    return rs
  }
}

export default sitemap
