<template>
  <div class="markdown-body" v-html="toMarkDown(md)" v-highlight></div>
</template>

<script>
  import highlight from '../directive/highlight'
  export default {
    name: 'MarkDown',
    directives: {
      highlight
    },
    props: {
      md: {
        type: String,
        required: true
      }
    },
    methods: {
      toMarkDown(text) {
        var showdown = require('showdown'),
          converter = new showdown.Converter()
        var hljs = require('highlight.js');
        return converter.makeHtml(text)
      }
    }
  }
</script>
<style>
  @import 'github-markdown-css';
  @import '../static/css/github-markdown.css';
  @import '../static/css/github.min.css';
</style>
