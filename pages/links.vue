<template>
  <frend-links :frend-links="links"></frend-links>
</template>

<script>
  import {
    getFriendLinks
  } from '@/api/link.js'
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
  }
</script>
