<template>
  <div class="post-pagination d-flex justify-content-center panel">
    <a href="javascript:void(0)" v-if="page > 1" @click="jump(page - 1)">
      <fa :icon="['fas', 'angle-left']" />
    </a>
    <template v-for="index of total">
      <span :value="index" :key="index" v-if="index === page" class="current">{{index}}</span>
      <a href="javascript:void(0)" :value="index" :key="index" v-else @click="jump(index)">{{index}}</a>
    </template>
    <a href="javascript:void(0)" v-if="page < total" @click="jump(page + 1)">
      <fa :icon="['fas', 'angle-right']" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'paging',
    props: {
      jump: {
        type: Function,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      page: {
        type: Number,
        required: true
      }
    }
  }
</script>
