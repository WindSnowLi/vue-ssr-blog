<template>
  <div class="markdown-body">
    <mavon-editor :value="md" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false"
      :scrollStyle="true" :ishljs="true" />
  </div>
</template>

<script>
  export default {
    name: 'MarkDown',
    props: {
      md: {
        type: String,
        required: true
      }
    }
  }
</script>
<style>
  @import 'github-markdown-css';
  @import '../static/css/github-markdown.css';
  @import '../static/css/github.min.css';
</style>
