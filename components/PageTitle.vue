<template>
  <div class="page-title panel">
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="nav">
        <li v-for="(item,i) in routeList" :key="i" :value="item">
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: false
    },
    routeList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {}
  }

}
</script>
