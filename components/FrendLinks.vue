<template>
  <div>
    <page-title title="首页" :route-list="getPageTitle()"></page-title>
    <div class="container pt-120 pb-90">
      <div class="row">
        <div class="link-box cover-oic" :key="index" v-for="(item,index) in frendLinks">
          <a :href="item.link" target="_blank">
            <div class="thumb">
              <img :src="item.coverPic" alt="示意图" />
            </div>
            <div class="link-content">
              <h2 class="link-title">{{ item.title }}</h2>
              <p>{{ item.describe }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Newsletter -->
    <!-- Overlay -->
    <div class="container">
      <div class="pt-20 pb-20 pr-120 pl-120 panel">
        <!-- Section title -->
        <div class="section-title text-center">
          <h2>友链申请</h2>
        </div>
        <b-alert class="col-lg-8 offset-lg-2 text-center" :show="dismissCountDown" dismissible :variant="inforType"
          @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{ infor }} {{ dismissCountDown }} s...
        </b-alert>
        <!-- End of Section title -->
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <!-- Newsletter Form -->
            <b-form @submit="onSubmit" @reset="onReset" class="text-center">
              <div class="form-row">
                <b-form-group class="form-group col-md-6" id="input-group-1" label="邮箱地址" label-for="emali">
                  <b-form-input id="input-1" v-model="friendLink.email" type="email" required placeholder="邮箱联系地址">
                  </b-form-input>
                </b-form-group>

                <b-form-group class="form-group col-md-6" id="input-group-2" label="网页命名" label-for="name">
                  <b-form-input id="input-2" v-model="friendLink.title" type="text" required placeholder="网页命名">
                  </b-form-input>
                </b-form-group>
              </div>

              <div class="form-row">
                <b-form-group class="form-group col-md-6" id="input-group-3" label="URL链接" label-for="url">
                  <b-form-input id="input-3" v-model="friendLink.link" type="text" required placeholder="URL链接">
                  </b-form-input>
                </b-form-group>
                <b-form-group class="form-group col-md-6" id="input-group-4" label="封面" label-for="coverPic">
                  <b-form-input id="input-4" v-model="friendLink.coverPic" type="text" required placeholder="封面URL链接">
                  </b-form-input>
                </b-form-group>
              </div>

              <b-form-group class="form-group" id="input-group-5" label="介绍" label-for="describe">
                <b-form-input id="input-5" v-model="friendLink.describe" type="text" required placeholder="网页描述">
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">提交</b-button>
              <b-button type="reset" variant="danger">重置</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    applyFriendLink
  } from '@/api/link.js'

  export default {
    name: 'FrendLinks',
    props: {
      frendLinks: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        friendLink: {
          coverPic: "",
          describe: "",
          email: "",
          link: "",
          title: ""
        },
        dismissSecs: 3,
        dismissCountDown: 0,
        infor: "",
        inforType: "",
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let keys = Object.keys(this.friendLink)
        for (let i in keys) {
          if (this.friendLink[keys[i]] == "") {
            this.inforType = "warning"
            this.showAlert()
            this.infor = "不可存在空项"
            return
          }
        }
        applyFriendLink(this.friendLink).then(() => {
          this.inforType = "success"
          this.showAlert()
          this.infor = "提交成功"
        })
      },
      onReset(evt) {
        evt.preventDefault()
        let keys = Object.keys(this.friendLink)
        for (let i in keys) {
          this.friendLink[keys[i]] = ""
        }
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      getPageTitle() {
        return [{
            title: '首页',
            to: {
              name: 'index'
            }
          },
          {
            title: '友链',
            to: {
              name: 'links'
            }
          }
        ]
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<style scoped>
  /*自定义友链样式*/
  .link-box a .thumb {
    font-size: 0;
    background-color: rgba(0, 0, 0, 0);
    margin: 0;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    width: 100%;
    border-radius: 25px;
  }

  .link-box {
    overflow: hidden;
    padding: 20px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 350px;
    height: 350px;
  }

  .link-box a {
    width: 100%;
    text-align: center;
    margin: 2%;
    border-radius: 1.3125rem;
    box-shadow: 1px 1px 5px 5px rgba(255, 112, 173, 0.5);
    -moz-box-shadow: 1px 1px 5px 5px rgba(255, 112, 173, 0.5);
    background-color: rgba(255, 255, 255, 0.35);
  }

  .link-box a:hover {
    box-shadow: 1px 1px 5px 5px rgba(255, 112, 173, 0.8);
    -moz-box-shadow: 1px 1px 5px 5px rgba(255, 112, 173, 0.75);
    background-color: rgba(255, 14, 163, 0.7);
  }

  .link-box img {
    width: 120px;
    border-radius: 25px;
  }

  .link-content {
    word-wrap: break-word;
    word-break: normal;
    text-align: center;
  }

  .link-content p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  .cover-oic a>div>img {
    margin-top: 20px;
  }

  button {
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 150px;
    margin-bottom: 50px;
  }

  button[type="submit"]{
    background-color: rgba(250, 52, 148, 0.5);
  }
  button[type="reset"]{
    background-color: rgba(141, 16, 250, 0.5);
  }
</style>
