<template>
  <frend-links :frend-links="links"></frend-links>
</template>

<script>
  import {getFriendLinks} from "../api/link";

  export default {
    layout: 'index',
    async asyncData() {
      let [links] = await Promise.all([
        getFriendLinks()
      ])
      return {
        links
      }
    },
    head() {
      return {
        title: '友链申请',
        meta: [{
            name: 'keywords',
            content: '友情链接,自助友情链接,网站友情链接,申请友情链接'
          },
          {
            name: 'description',
            content: '本页面可以进行友情链接交换、友情链接申请、可以在这链接到你的网页'
          }
        ]
      }
    }
  }
</script>
