<template>
  <div class="container pt-120 pb-90 panel">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-10 offset-md-1">
          <div class="page-text">
            <mark-down v-bind:md="content"></mark-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    methods: {
      getPageTitle(article) {
        return [{
          title: '首页',
          to: {
            name: 'index'
          }
        },
        {
          title: '关于',
          to: {
            name: 'about',
          }
        }
        ]
      }
    }
  }
</script>
