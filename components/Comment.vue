<template>
  <div>
    <ul v-for="(item,index) in comments" class="post-all-comments">
      <li class="single-comment-wrapper panel">
        <!-- Single Comment -->
        <div class="single-post-comment">
          <!-- Author Image -->
          <div class="comment-author-image">
            <img
              :src="item.fromUser.avatar"
              alt=""
              class="img-fluid"
            >
          </div>
          <!-- Comment Content -->
          <div class="comment-content">
            <div class="comment-author-name">
              <h6>{{ item.fromUser.nickname }}</h6>
              <span> {{ item.time }} </span>
            </div>
            <p>{{ item.content }}</p>
            <b-form-textarea
              v-model="replys[`${item.id}-`]"
              style="height: auto;"
              class="reply-box"
              placeholder="回复点什么······"
              max-rows="24"
            />
            <div class="reply-btn">
              <b-button @click="replyComment(`${item.id}-`,item.fromUser.id,item.id)">{{ replyBtn }}回复</b-button>
            </div>
          </div>
        </div>
        <!-- End of Single Comment -->
        <ul v-for="(childItem,childIndex) in item.childList" v-if="item.childList.length!==0" class="children">
          <li class="single-comment-wrapper">
            <!-- Single Comment -->
            <div class="single-post-comment">
              <!-- Author Image -->
              <div class="comment-author-image">
                <img
                  :src="childItem.fromUser.avatar"
                  alt=""
                  class="img-fluid"
                >
              </div>
              <!-- Comment Content -->
              <div class="comment-content">

                <div class="comment-author-name">
                  <h6>{{ childItem.fromUser.nickname }}</h6>
                  <span> {{ childItem.time }} </span>
                  <p style="color:#ec6e6e;">回复</p>
                  <h6>{{ childItem.toUser.nickname }}</h6>
                  <span> {{ childItem.parentId.time }} </span>
                </div>

                <p style="font-size: 18px">
                  {{ childItem.content }}
                </p>

                <b-form-textarea
                  v-model="replys[`${item.id}-${childItem.id}`]"
                  style="height: auto"
                  class="reply-box"
                  placeholder="回复点什么······"
                  max-rows="24"
                />
                <div class="reply-btn">
                  <b-button @click="replyComment(`${item.id}-${childItem.id}`,item.fromUser.id,item.id)">{{
                    replyBtn
                  }}回复
                  </b-button>
                </div>
              </div>
            </div>
            <!-- End of Single Comment -->
          </li>
        </ul>
      </li>
    </ul>
    <div class="post-details-comments">
      <b-form-textarea
        v-model="comment"
        rows="3"
        class="reply-box"
        placeholder="评论点什么······"
        max-rows="24"
      />
      <div class="btn-publish-comments">
        <b-button @click="publishComment()">{{ replyBtn }}发表新评论</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addComment } from '../api/comment'
import { getToken } from '../utils/auth'

export default {
  name: 'Comment',
  props: {
    sessionType: {
      type: String,
      require: true
    },
    targetId: {
      type: Number,
      default: null
    },
    comments: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      comment: '',
      replys: {},
      replyBtn: ''
    }
  },
  created() {
    if (getToken()) {
      this.replyBtn = ''
    } else {
      this.replyBtn = '登陆后'
    }
  },
  methods: {
    checkLogin() {
      if (!getToken()) {
        this.$bvToast.toast(`登陆后才可评论`, {
          title: '登陆提示',
          variant: 'danger',
          solid: true,
          autoHideDelay: 3000,
          toaster: 'b-toaster-bottom-right'
        })
        this.$router.push({
          name: 'login',
          query: { redirect: window.location.protocol + '//' + window.location.host + window.location.pathname }
        })
      }
    },
    publishComment() {
      this.checkLogin()
      if (!this.comment) {
        this.$bvToast.toast(`内容不可为空`, {
          title: '内容不可为空',
          variant: 'danger',
          solid: true,
          autoHideDelay: 3000,
          toaster: 'b-toaster-bottom-right'
        })
        return
      }
      addComment(getToken(), this.sessionType, this.comment, this.targetId).then((rsp) => {
        this.$bvToast.toast(`评论发表成功，审核通过后显示。`, {
          title: '评论发表提示',
          variant: 'success',
          solid: true,
          autoHideDelay: 3000,
          toaster: 'b-toaster-bottom-right'
        })
        this.comment = ''
      })
    },
    replyComment(index, toUser, parentId) {
      this.checkLogin()
      if (!this.replys[`${index}`]) {
        this.$bvToast.toast(`内容不可为空`, {
          title: '内容不可为空',
          variant: 'danger',
          solid: true,
          autoHideDelay: 3000,
          toaster: 'b-toaster-bottom-right'
        })
        return
      }
      addComment(getToken(), this.sessionType, this.replys[`${index}`], this.targetId, parentId, toUser).then((rsp) => {
        this.$bvToast.toast(`评论回复成功，审核通过后显示。`, {
          title: '评论回复提示',
          variant: 'info',
          solid: true,
          autoHideDelay: 3000,
          toaster: 'b-toaster-bottom-right'
        })
        this.replys[`${index}`] = ''
      })
    }
  }
}
</script>

<style scoped>

.comment-author-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment-author-image img {
  border-radius: 50%;
}

.img-fluid {
  max-width: 70%;
}

.post-details-cover .post-all-comments {
  margin-top: 50px;
}

.reply-btn {
  width: calc(100% - 20px);
  line-height: 12px;
  overflow: hidden;
  font-size: 15px;
  background-color: transparent;
  box-sizing: border-box;

}

.reply-btn button {
  float: right;
  margin: 5px;
  border-radius: 5px;
  background-color: #06c3d4;
  color: #1d2110;
}
</style>
