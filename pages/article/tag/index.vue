<template>
  <tag :labels="labels" />
</template>

<script>
import { getVisitorInfo } from '../../../api/user'
import { getAllLabel } from '../../../api/article-label'

export default {
  layout: 'index',
  async asyncData() {
    const [user, labels] = await Promise.all([
      getVisitorInfo(),
      getAllLabel()
    ])
    let keywords = ''
    labels.forEach((label) => {
      keywords += label.name + ','
    })
    return {
      user,
      labels,
      keywords
    }
  },
  head() {
    return {
      title: this.user.nickname + '的文章标签',
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
        content: this.user.nickname + '的' + this.user.nickname + '系列文章'
      }
      ]
    }
  }
}
</script>
