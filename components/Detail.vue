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
            <div v-if="articleDetail.article.publishType === 'ORIGINAL'" class="declare">
              <div class="author">本文作者：{{ articleDetail.user.nickname }}</div>
              <div class="create-time">发布时间：{{ articleDetail.article.createTime }}</div>
              <div class="update-time">最后更新：{{ articleDetail.article.updateTime }}</div>
              <div class="article-titles">
                本文标题：
                <a
                  :href="getPageUrl()"
                  :title="articleDetail.article.title"
                  target="_blank"
                >
                  {{ articleDetail.article.title }}
                </a>
              </div>
              <div class="article-url">
                原文链接：
                <a
                  :href="getPageUrl()"
                  :title="articleDetail.article.title"
                  target="_blank"
                >{{ getPageUrl() }}
                </a>
              </div>
              <div
                class="copyright"
              >版权声明：本文为「 {{ articleDetail.user.nickname }} 」原创，依据
                <a
                  rel="license"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  title="知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议"
                >
                  CC BY-NC-SA 4.0
                </a>许可证进行授权，转载请附上出处链接及本声明。
              </div>
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="知识共享许可协议"
                  style="border-width:0"
                  src="https://myblog12.qiniu.yansheng.xyz/picgo/by-nc-sa-4.0-88x31.png"
                >
              </a>
            </div>
            <!-- 标签 -->
            <div class="article-tags">
              <fa :icon="['fas', 'tag']" class="icon" />
              <ul class="article-tag-list">
                <li v-for="(label,i) in articleDetail.article.labels" :key="label">
                  <nuxt-link
                    :key="i"
                    class="color1"
                    :value="label"
                    :to="{ name: 'article-tag-id', params: { id: label.id } }"
                  >
                    {{ label.name }}
                  </nuxt-link>
                </li>
              </ul>
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
import { getPageUrl } from '../plugins/js/utils'

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
    getPageUrl() {
      return getPageUrl()
    },
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
