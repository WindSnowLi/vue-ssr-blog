<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()" />
    <div class="container pt-120 pb-90 panel">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-10 offset-md-1">
            <div class="page-text">
              <mark-down :md="content" />
            </div>
            <comment v-if="aboutComment" class="post-details-cover post-all-comments" style="margin-top: 100px" :comments="comments" session-type="ABOUT" />
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
    },
    aboutComment: {
      type: Boolean,
      default: false
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getPageTitle() {
      return [{
        title: '首页',
        to: {
          name: 'index'
        }
      },
      {
        title: '关于',
        to: {
          name: 'about'
        }
      }
      ]
    }
  }
}
</script>
