<template>
  <div class="page-title panel">
      <div class="container">
          <h2>{{title}}</h2>
          <ul class="nav">
              <li :value="item" :key="i" v-for="(item,i) in routeList"><nuxt-link :to="item.to">{{ item.title }}</nuxt-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default{
    name: 'PageTitle',
    data(){
      return {}
    },
    props: {
      title: {
        type: String,
        required: false
      },
      routeList: {
        type: Array,
        required: true,
        default: () => [],
      }
    }

  }
</script>
