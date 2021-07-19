<template>
  <div>
    <page-title title="首页" :routeList="getPageTitle()"></page-title>
    <div class="container pt-120 pb-90">
      <div class="row">
        <!-- 分类 -->
        <div class="col-md-6" :value="label" :key="i" v-for="(label,i) in labels">
          <div class="my-post-category">
            <nuxt-link :to="{ name:'article-type-id',params:{ id: label.id } }"
              class="d-flex align-items-center justify-content-center"
              v-bind:style="{ backgroundImage: 'url(' + label.coverPic + ')' }">
              <div class="cat-title" style="text-align:center">
                <fa :icon="['fas', 'tag']" /></i>&ensp;{{label.name}}（{{label.num}}）
                <br>
                <fa :icon="['fas', 'eye']" /></i>&ensp;{{label.visitsCount}}
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
  import {
    getAllTypeByUserId
  } from '@/api/article.js'
  import PageTitle from './PageTitle'
  import ArticleType from './ArticleType'
  export default {
    name: 'categories',
    data() {
      return {
        labels: [],
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
    },
    created: function() {
      const _self = this
      getAllTypeByUserId().then(data => {
        _self.labels = data
      })
    }
  }
</script>
