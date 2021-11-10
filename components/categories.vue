<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()" />
    <div class="container pt-120 pb-90">
      <ul class="type-tag-list clearfix">
        <li v-for="(item) in labels" :key="item">
          <nuxt-link class="eo-bg" :to="{ name:'article-type-id',params:{ id: item.id } }">
            <div v-if="item.desc" class="description">
              {{ item.desc }}
            </div>
            <div v-else class="description">
              无分类描述的文章。
            </div>
            <div class="type-tag-row">
              <span class="name">
                {{ item.name }}
              </span>
              <span class="articles">{{ item.num }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

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
<style>
@import "static/css/type-tag/style.css";
</style>
