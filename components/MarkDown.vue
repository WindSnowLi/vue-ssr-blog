<template>
  <mavon-editor
    style="background-color: rgba(255, 255, 255, 0.5); border: none;"
    :value="md"
    :subfield="false"
    :default-open="'preview'"
    :toolbars-flag="false"
    :editable="false"
    :box-shadow="false"
    :scroll-style="true"
    :ishljs="true"
    code-style="monokai"
  />
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

</style>
<style scoped>
/deep/ .v-note-panal {
  background-color: rgba(0, 0, 0, 0) !important;
  border: none;
}

/deep/ .v-show-content {
  background-color: rgba(0, 0, 0, 0) !important;
}

/deep/ .v-show-content h1 {
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1.1;
  padding-top: 16px;
  margin-bottom: 4px;
  border-bottom: 2px solid #eee;
}

/deep/ .v-show-content h2 {
  padding: 10px 20px;
  margin: 15px 0;
  color: #3f51b5;
  font-weight: bold;
  line-height: 1.5;
  background-color: rgba(255, 255, 255, 0.51);
  border-left: 5px solid rgb(0, 191, 255);
}

/deep/ .v-show-content pre {
  padding: 0;
  font-size: large;
}

</style>
