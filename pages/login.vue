<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="/images/login.png" alt="IMG">
        </div>
        <b-form @submit="onLogin" class="login100-form validate-form">
          <span class="login100-form-title"> 登录 </span>
          <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input class="input100" type="email" v-model="user.account" placeholder="邮箱" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <fa :icon="['fas', 'envelope']"/>
            </span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" minlength="6" v-model="user.password" placeholder="密码" required>
            <span
              class="focus-input100">
            </span>
            <span class="symbol-input100">
              <fa :icon="['fas', 'lock']"/>
            </span>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit"> 登录</button>
          </div>
          <div v-if="false" class="text-center p-t-12">
            <span class="txt1">忘记</span>
            <a class="txt2" href="#">用户名 /
              密码?</a>
          </div>
          <div class="text-center p-t-136">
            <a class="txt2" :href="giteeUrl">
              Gitee登录
              <fa :icon="['fas', 'arrow-right']" class="m-l-5"/>
            </a>
            <br>
            <a v-if="false" class="txt2" href="#">
              GitHub登录
              <fa :icon="['fas', 'arrow-right']" class="m-l-5"/>
            </a>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import {getGiteeClientId} from "../api/sys";
import {giteeLogin, login} from "../api/user";
import {setToken} from "../utils/auth";

export default {
  name: "login",
  async asyncData() {
    let [giteeClientId] = await Promise.all([
      getGiteeClientId()
    ])
    return {
      client_id: giteeClientId.clientId
    }
  },
  data() {
    return {
      giteeUrl: "",
      status: true,
      user: {
        account: "",
        password: ""
      }
    }
  },
  head() {
    return {
      link: [{rel: "stylesheet", href: "css/main.css"}, {rel: "stylesheet", href: "css/util.css"}],
      script: [{src: "https://unpkg.com/tilt.js@1.1.21/dest/tilt.jquery.min.js", ssr: false}],
      title: '登录',
      meta: [{
        name: 'keywords',
        content: '登录、注册、账号验证'
      },
        {
          name: 'description',
          content: '本页面可以进行登录、注册，支持Gitee登录'
        }
      ]
    }
  },
  methods: {
    getGiteeLoginUrl() {
      let encodeCallback = encodeURIComponent(window.location.protocol + "//" + window.location.host + window.location.pathname)
      let url = 'https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code'
        .replace('${redirect_uri}', encodeCallback)
        .replace('${client_id}', this.client_id)
      if (this.$route.query.redirect) {
        url += '&state=' + this.$route.query.redirect
      }
      return url
    },
    onLogin(evt) {
      evt.preventDefault()
      login(this.user).then(rsp => {
        setToken(rsp.token)
        this.$bvToast.toast('登陆成功', {
          title: `登陆提示`,
          variant: 'info',
          solid: true
        })
        if (this.$route.query.redirect) {
          window.location = this.$route.query.redirect
        } else {
          this.$router.push({name: 'index'})
        }
      })
    },
  },
  mounted() {
    // 加载图片3D效果
    $('.js-tilt').tilt()
    // 加载Gitee登录Url
    this.giteeUrl = this.getGiteeLoginUrl()
  },
  created() {
    if (this.$route.query.code && process.client && this.status) {
      this.status = false
      giteeLogin(this.$route.query.code, window.location.protocol + "//" + window.location.host + window.location.pathname).then(rsp => {
        setToken(rsp.token)
        if (this.$route.query.state) {
          window.location = this.$route.query.state
        } else {
          this.$router.push({name: 'index'})
        }
      })
    }
  }
}
</script>
