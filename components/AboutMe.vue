<template>
  <div class="container pt-120 pb-90 panel">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-10 offset-md-1">
          <div class="page-text">
            <mark-down v-bind:md="content"></mark-down>
          </div>
          <comment class="post-details-cover post-all-comments" style="margin-top: 100px" :comments="comments" session-type="ABOUT"></comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getTargetComments} from "../api/comment";

export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      comments: [],
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
  },
  created() {
    getTargetComments('ABOUT', 'PASS', Number(this.$route.params.id)).then(rsp => {
      this.comments = rsp
    });
  }
}
</script>
