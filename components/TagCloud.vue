<template>
  <svg :width='width' :height='height' @mousemove='listener($event)'>
    <nuxt-link :to="tag.link" :key="tag.name" v-for='tag in tags'>
      <text :x='tag.x' :y='tag.y' :style="tag.color">{{tag.text}}</text>
    </nuxt-link>
  </svg>
</template>

<script>
  export default {
    name: 'TagCloud',
    props: {
      labels: {
        type: Array,
        required: true
      },
      width: {
        type: Number,
        default: 230
      },
      height: {
        type: Number,
        default: 230
      },
      tagsNum: {
        type: Number,
        default: 20
      },
      RADIUS: {
        type: Number,
        default: 100
      },
    },
    data() {
      return {
        speedX: Math.PI / 360,
        speedY: Math.PI / 360,
        tags: []
      }
    },
    computed: {
      CX() {
        return this.width / 2;
      },
      CY() {
        return this.height / 2;
      }
    },
    created() { //初始化标签位置
      if (this.tagsNum > this.labels.length) {
        this.tagsNum = this.labels.length
      }
      let tags = []
      for (let i = 0; i < this.labels.length; i++) {
        let tag = {}
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI)
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b)
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tag.color = this.getRandomColor()
        tag.text = this.labels[i].name
        tag.link = this.labels[i].link
        tags.push(tag)
      }
      this.tags = tags
    },
    mounted() { //使球开始旋转
      setInterval(() => {
        this.rotateX(this.speedX)
        this.rotateY(this.speedY)
      }, 17)
    },
    methods: {
      rotateX(angleX) {
        var cos = Math.cos(angleX)
        var sin = Math.sin(angleX)
        for (let tag of this.tags) {
          var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
          var z1 = tag.z * cos + (tag.y - this.CY) * sin
          tag.y = y1
          tag.z = z1
        }
      },
      rotateY(angleY) {
        var cos = Math.cos(angleY)
        var sin = Math.sin(angleY)
        for (let tag of this.tags) {
          var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
          var z1 = tag.z * cos + (tag.x - this.CX) * sin
          tag.x = x1
          tag.z = z1
        }
      },
      listener(event) { //响应鼠标移动
        var x = event.clientX - this.CX
        var y = event.clientY - this.CY
        this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002,
          x * 0.0001)
        this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002,
          y * 0.0001)
      },
      // 获取随机颜色
      getRandomColor() {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        return {
          color: `rgb(${r},${g},${b})`
        }
      }
    }
  }
</script>
<style scoped>
  /deep/ svg>a>text {
    fill: currentcolor;
  }
</style>
