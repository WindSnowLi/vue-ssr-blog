<template>
  <div>
    <page-title :route-list="getPageTitle(articleDetail.article)" />
    <div class="container pt-40 pb-90">
      <div class="row">
        <div class="col-md-10 offset-md-1 panel" style="margin-bottom: auto">
          <div class="post-details-cover post-has-full-width-image">
            <!-- 封面介绍结束 -->
            <div class="post-thumb-cover" style="text-align: center;">
              <!-- 文章元信息 -->
              <div class="post-meta-info">
                <!-- 标题 -->
                <div class="title" style="margin-top: 45px;">
                  <h1 style="font-size: 32px">{{ articleDetail.article.title }}</h1>
                </div>
                <!-- 类别 -->
                <p class="cats">
                  <fa :icon="['fas', 'list-alt']" />
                  <nuxt-link :to="{ name: 'article-type-id', params: { id: articleDetail.article.articleType.id } }">
                    {{ articleDetail.article.articleType.name }}
                  </nuxt-link>
                </p>
                <!-- Meta -->
                <div class="author-box">
                  <ul class="nav meta align-items-center">
                    <li class="meta-author">
                      <img :src="articleDetail.user.avatar" alt="" class="img-fluid">
                      <a href="#">{{ articleDetail.user.nickname }}</a>
                    </li>
                    <li class="meta-date"><a href="#">{{ articleDetail.article.createTime }}</a></li>
                    <li class="meta-date">
                      <fa :icon="['fas', 'eye']" />
                      <a href="#">{{ articleDetail.article.pv }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 文章元信息结束 -->
            </div>
            <!-- 封面介绍结束 -->
            <br>
            <!-- Post Content -->
            <mark-down :md="articleDetail.article.content" />
            <!-- End of Post Content -->

            <!-- 标签 -->
            <div class="post-all-tags">
              <template v-for="(label,i) in articleDetail.article.labels">
                <nuxt-link
                  :key="i"
                  class="badge badge-info"
                  :value="label"
                  :to="{ name: 'article-tag-id', params: { id: label.id } }"
                >
                  <fa :icon="['fas', 'tag']" />
                  {{ label.name }}
                </nuxt-link>
              </template>
            </div>
            <!-- 标签结束 -->
            <div v-if="articleDetail.next || articleDetail.pre" class="previous-next-links">
              <div v-if="articleDetail.pre" class="previous-design-link">
                <nuxt-link :to="{ name:'article-detail-id',params:{ id: articleDetail.pre.id } }">
                  <fa :icon="['fas', 'arrow-left']" style="font-size:16px;" aria-hidden="true" />
                  {{ articleDetail.pre.title }}
                </nuxt-link>
              </div>
              <div v-if="articleDetail.next" class="next-design-link">
                <nuxt-link :to="{ name:'article-detail-id',params:{ id: articleDetail.next.id } }">
                  {{ articleDetail.next.title }}
                  <fa :icon="['fas', 'arrow-right']" style="font-size:16px;" aria-hidden="true" />
                </nuxt-link>
              </div>
            </div>
            <comment
              v-if="articleComment && (!articleDetail.article.commentDisabled)"
              :comments="comments"
              session-type="ARTICLE"
              :target-id="Number(this.$route.params.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  props: {
    articleDetail: {
      type: Object,
      required: true
    },
    articleComment: {
      type: Boolean,
      default: false
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      comment: '',
      replyComments: {}
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
        title: article.articleType.name,
        to: {
          name: 'article-type-id',
          params: {
            id: article.articleType.id
          }
        }
      },
      {
        title: article.title,
        to: {
          name: 'article-detail-id',
          params: {
            id: article.id
          }
        }
      }
      ]
    }
  }
}
</script>

<style scoped>
.previous-next-links {
  line-height: 24px;
  overflow: hidden;
  padding: 10px 20px;
  font-size: 15px;
  background-color: rgba(217, 237, 247, 0.8);
  box-sizing: border-box;
  border-radius: 5px;
}

.previous-next-links a {
  color: #3f51b5;
}

.previous-design-link {
  float: left;
}

.next-design-link {
  float: right;
}

</style>
