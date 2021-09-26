<template>
  <detail
    :article-detail="articleDetail"
    :comments="comments"
    :article-comment="baseConfig.articleComment"
  />
</template>

<script>
import { getArticleById } from '../../../api/article'
import { getTargetComments } from '../../../api/comment'
import { getFixedConfig } from '../../../api/sys'

export default {
  layout: 'index',
  async asyncData({
    params
  }) {
    const [articleDetail, comments, baseConfig] = await Promise.all([
      getArticleById(params.id),
      getTargetComments('ARTICLE', 'PASS', Number(params.id)),
      getFixedConfig()
    ])
    return {
      articleDetail,
      user: articleDetail.user,
      comments,
      baseConfig: baseConfig.sys
    }
  },
  head() {
    return {
      title: this.articleDetail.article.title + '-' + this.user.nickname,
      meta: [{
        name: 'keywords',
        content: this.articleDetail.article.title
      },
      {
        name: 'author',
        content: this.user.nickname
      },
      {
        name: 'description',
        content: this.articleDetail.article.summary
      }
      ]
    }
  }
}
</script>
