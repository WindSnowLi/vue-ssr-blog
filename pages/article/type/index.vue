<template>
  <categories :labels="labels"></categories>
</template>

<script>
  import {getAllType} from "../../../api/article-label";
  import {getVisitorInfo} from "../../../api/user";
  export default {
    layout: 'index',
    async asyncData() {
      let [user, labels] = await Promise.all([
        getVisitorInfo(),
        getAllType(),
      ])
      let keywords = ""
      labels.forEach(label => {
        keywords += label.name + ','
      });
      return {
        user: user,
        labels: labels
      }
    },
    head() {
      return {
        title: this.user.nickname + '的文章分类',
        meta: [{
            name: 'keywords',
            content: this.keywords
          },
          {
            name: 'author',
            content: this.user.nickname
          },
          {
            name: 'description',
            content: this.user.nickname + '的文章分类'
          }
        ]
      }
    },
  }
</script>
