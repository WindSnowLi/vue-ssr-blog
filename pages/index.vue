<template>
  <home-page :user="user"></home-page>
</template>

<script>
  import axios from "axios"
  import {
    findUserByUserId
  } from '@/api/article.js'
  export default {
    asyncData() {
      return findUserByUserId().then(res => {
        return {
          user: res
        }
      })
    },
  }
</script>
<style>
  @import "../static/css/style.css";
  @import "../static/css/custom.css";
</style>
