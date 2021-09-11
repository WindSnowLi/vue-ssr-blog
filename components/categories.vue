<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()" />
    <div class="container pt-120 pb-90">
      <div class="row">
        <!-- 分类 -->
        <div v-for="(label,i) in labels" :key="i" class="col-md-6" :value="label">
          <div class="my-post-category">
            <nuxt-link
              :to="{ name:'article-type-id',params:{ id: label.id } }"
              class="d-flex align-items-center justify-content-center"
              :style="{ backgroundImage: 'url(' + label.coverPic + ')' }"
            >
              <div class="cat-title" style="text-align:center">
                <fa :icon="['fas', 'tag']" />&ensp;{{ label.name }}（{{ label.num }}）
                <br>
                <fa :icon="['fas', 'eye']" />&ensp;{{ label.visitsCount }}
              </div>
            </nuxt-link>
          </div>
        </div>
        <!-- 分类结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './PageTitle'
import ArticleType from './ArticleType'
import {
  getAllTypeByUserId
} from '@/api/article.js'
export default {
  name: 'Categories',
  props: {
    labels: {
      type: Array,
      required: true
    }
  },
  methods: {
    getPageTitle() {
      return [{
        title: '首页',
        to: {
          name: 'index'
        }
      },
      {
        title: '分类',
        to: {
          name: 'article-type'
        }
      }
      ]
    }
  }
}
</script>
