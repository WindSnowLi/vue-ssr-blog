<template>
  <detail
    :articleDetail="articleDetail"
    :user="user"
    :labels="labels"
    :mostVisits="mostVisits"
    :comments="comments"
    :article-comment="sundry.articleComment"
  >
  </detail>
</template>

<script>
import {getArticleById, getMostVisits} from "../../../api/article";
import {getAllLabel} from "../../../api/article-label";
import {getTargetComments} from "../../../api/comment";
import {getSundry} from "../../../api/sys";

export default {
  layout: 'index',
  async asyncData({
                    params
                  }) {
    let [articleDetail, labels, mostVisits, comments, sundry] = await Promise.all([
      getArticleById(params.id),
      getAllLabel(),
      getMostVisits(),
      getTargetComments('ARTICLE', 'PASS', Number(params.id)),
      getSundry()
    ])
    return {
      articleDetail,
      user: articleDetail.user,
      labels,
      mostVisits,
      comments,
      sundry: sundry.sundry
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
