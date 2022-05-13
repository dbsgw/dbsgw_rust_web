<template>
  <section class="container">
    <article class="section article">
      <h2 class="title">{{ articleObject.article_title }}</h2>
      <div class="other-info">
        <p>
          <span class="author">
            <Rust_Icon type="rust_yaoqinghaoyou"></Rust_Icon>
           {{ articleObject.user_name || "无" }}
          </span>
          <time class="time m-l-5px keep-all">
            <rust_-icon type="rust_shijian"></rust_-icon>
            {{ moment(articleObject.article_time * 1000).format(' YYYY-MM-DD hh:mm:ss') }}
          </time>
        </p>
        <p>
          <span class="text m-l-10px">分类：</span>
          <span
            class="classify">
            解决问题
            <!--            v-for="(item, index) in detail.articleInfor.classify"-->
            <!--            :key="item.key"-->
            <!--            v-html="index === detail.articleInfor.classify.length - 1 ? item.name : `${item.name}、`"-->
            <!--          >-->
          </span>
          <span class="m-l-5px">
            <rust_-icon type="rust_redu"></rust_-icon>
            12245
          </span>
          <span class="m-l-5px">
            <rust_-icon type="rust_liuyan"></rust_-icon>
            留言
          </span>
        </p>
      </div>
      <div class="content-details" ref="articleContent" v-html="articleObject.article_content">
      </div>
    </article>
    <!-- 文章内容结束 -->

    <!--    评论列表-->
    <div class="section comment-list">
      <h2 class="comment-list-title"
          v-html="`共 ${articleCommentObject.total} 条评论关于 “${articleObject.article_title}”`"></h2>
      <ul>
        <li class="comment-list-item" v-for="(item,index) in articleCommentObject.result" :key="index">
          <div class="comment-list-item__avatar"><img
            src="https://aws1.discourse-cdn.com/business5/uploads/rust_lang/original/2X/e/e260a60b8dca4dae6ce7db98c45bb5008e6fdc62.png"
            class="comment-list-item--image-avatar"></div>
          <div class="comment-list-item__content">
            <header class="comment-list-item__content-header">
              <div style="display: flex; align-items: center;">
                <div class="comment-list-item__author"><a href="/" target="_blank"
                                                          class="comment-list-item__author-name vertical-middle">{{
                    item.from_nickname
                  }}</a>
                  <!----></div>
              </div>
              <div class="comment-list-item--reply">
                <time>{{ moment(item.time * 1000).format(' YYYY-MM-DD hh:mm:ss') }}</time>
<!--                <a class="comment-list-item&#45;&#45;reply-btn"><i class="iconfont icon-send"></i> 回复-->
<!--                </a>-->
              </div>
            </header>
            <div class="comment-list-item--content">
              <div v-html="item.content">

              </div>
              <!----> <!---->
            </div> <!---->
            <!--            回复-->
            <!--                        <div class="comment-list-wrapper is-child">-->
            <!--                          <ul class="comment-list">-->
            <!--                            <li  class="comment-list-item is-child">-->
            <!--                              <div class="comment-list-item__avatar"><img-->
            <!--                                src="https://aws1.discourse-cdn.com/business5/uploads/rust_lang/original/2X/e/e260a60b8dca4dae6ce7db98c45bb5008e6fdc62.png"-->
            <!--                                class="comment-list-item&#45;&#45;image-avatar"></div>-->
            <!--                              <div class="comment-list-item__content">-->
            <!--                                <header class="comment-list-item__content-header">-->
            <!--                                  <div style="display: flex; align-items: center;">-->
            <!--                                    <div class="comment-list-item__author"><a href="#" target="_blank"-->
            <!--                                                                              class="comment-list-item__author-name vertical-middle">痴迷</a>-->
            <!--                                    </div>-->
            <!--                                  </div>-->
            <!--                                  <div class="comment-list-item&#45;&#45;reply">-->
            <!--                                    <time>2021-03-03 11:49:54</time>-->
            <!--                                    <a class="comment-list-item&#45;&#45;reply-btn"><i class="iconfont icon-send"></i> 回复-->
            <!--                                    </a></div>-->
            <!--                                </header>-->
            <!--                                <div class="comment-list-item&#45;&#45;content">-->
            <!--                                  <div>我在舒适圈待太久了，觉得不能这样下去了</div> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
            <!--                                </div> &lt;!&ndash;&ndash;&gt;-->
            <!--                              </div>-->
            <!--                            </li>-->
            <!--                          </ul>-->
            <!--                        </div>-->
          </div>
        </li>
      </ul>
    </div>
    <!--    评论-->

    <div class="comment section">
      <span style="padding: 10px;font-size: 16px;display: inline-block;font-weight: 700;">发表评论</span>
      <span style="padding: 10px;font-size: 16px;display: inline-block;font-weight: 700;color: red"
            v-if="!isLogin">你还未登录,请先登录！</span>
      <editor-vue-mavon-editor :minHeight="'min-height: 300px'" :subfield="false" @change="changes"
                               ref="editor"></editor-vue-mavon-editor>
      <div style="display: flex;padding: 20px">
        <div style="flex: 1;">
          <ul class="help-block col-md-10">
            <li>请尽量让自己的回复能够对别人有帮助</li>
            <li class="markdown_tip">支持 Markdown 格式, <strong>**粗体**</strong>、~~删除线~~、<code>`单行代码`</code></li>
            <li>图片支持拖拽、截图粘贴等方式上传</li>
          </ul>
        </div>
        <div style="width: 60px">
          <el-button type="primary" :disabled="!isLogin" @click="handelClickComment">提交</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import {mapState} from "vuex";

export default {
  name: "Details",
  components: {},
  data() {
    return {
      articleObject: {},
      articleCommentObject: {},
      paramsId: null,
      articleID: null,
      RustHtml: null,
      RustMk: null,

    }
  },
  computed: {
    // 是否登录
    isLogin() {
      if (this.$store.state.info.uid) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    moment,
    changes(s, r) {
      this.RustHtml = r
      this.RustMk = s
      console.log(r, s)
    },
    handelClickComment() {
      var data = {
        comment: this.RustHtml,
        articleID: this.articleID
      }
      this.$axios.$post("/v1/comment", data).then(result => {
        if (result.status != 200) {
          this.$message.error(result.msg)
        } else {
          this.$message.success(result.msg)
        }
      })
    },
  },
  // async fetch({params, store,axios}) {
  //   this.paramsId = params.id
  //   // console.log(params, params.id)
  //   const result = await axios.get(`/v1/admin/article/${params.id}`)
  //   // console.log(result)
  //   // store.dispatch('article/updateArticleViewCount', { id: params.id })
  //   // return store.dispatch('article/getArticleDetail', params.id)
  // },
  async asyncData({app,params}) {
    const result = await app.$axios.$get(`http://127.0.0.1:3000/v1/user/article/${params.id}`)
    return { articleObject: result.data }
  },
  async created() {
    this.articleID = this.$route.params.id
    // const result = await this.$axios.$get(`/v1/admin/article/${this.$route.params.id}`)
    // this.articleObject = result.data

    const results = await this.$axios.$get(`/v1/comment?articleID=${this.articleID}`)
    this.articleCommentObject = results.data
  },
  head() {
    // const keywords = []
    // this.detail.articleInfor.tags && this.detail.articleInfor.tags.forEach(item => keywords.push(item.name))
    return {
      title: this.articleObject.article_title,
      meta: [
        {hid: 'keywords', name: 'keywords', content: this.articleObject.article_title},
        {hid: 'description', name: 'description', content: this.articleObject.article_title}
      ],
      style: [
        // { cssText: this.info.detailsCss, type: 'text/css' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .toggle-reading-mode {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px;
    background: var(--color-sub-background);
    transition: .3s;
    cursor: pointer;

    &.is-active {
      transform: rotateZ(180deg);
    }
  }
}

.section {
  margin-top: $container-margin;
  padding: $container-padding;
  background: var(--color-sub-background);
  border-radius: $border-radius;
}

.article {
  margin-top: 0;

  .title {
    padding: 10px 0;
    font-size: 20px;
    text-align: center;
  }

  .other-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-border);
    text-align: center;
    color: var(--color-secondary);

    .m-l-5px {
      margin-left: 5px;
    }

    .m-l-10px {
      margin-left: 10px;
    }

    .iconfont {
      vertical-align: baseline;
    }
  }
}

.comment-list {
  &-item {
    display: flex;
    width: 100%;

    & + .comment-list-item {
      margin-top: var(--large-gap);
    }

    .comment-list-item {
      margin-top: var(--small-gap);
    }

    &__content {
      flex: 1;
      width: 0;
    }

    &--more-btn {
      margin-top: var(--small-gap);
      padding-left: calc(var(--avatar-width) + var(--small-gap));
      color: var(--color-secondary);
      cursor: pointer;

      &.is-loading {
        cursor: wait;
      }
    }

    &__avatar {
      margin-right: var(--small-gap);
    }

    &--image-avatar {
      width: var(--avatar-width);
      height: var(--avatar-width);
      border-radius: 50%;
    }

    &--text-avatar {
      display: inline-block;
      width: var(--avatar-width);
      height: var(--avatar-width);
      border-radius: 5px;
      font-size: 22px;
      text-align: center;
      line-height: var(--avatar-width);
      color: #fff;
    }

    &--reply {
      font-size: 12px;
      color: var(--color-secondary);

      &-btn {
        margin-left: var(--small-gap);
        color: var(--color-secondary);
        cursor: pointer;
      }
    }

    &__author {
      &-name {
        font-size: 18px;
      }

      &-level.vip-style-1 {
        display: inline-block;
        width: 18px;
      }
    }

    &--content {
      margin-top: var(--small-gap);
      padding: var(--base-gap);
      border-radius: $border-radius;
      background: var(--color-main-background);
      white-space: pre-line;

      a {
        color: var(--color-theme);
      }
    }

    &--parent-content {
      margin-top: var(--base-gap);
      padding: var(--small-gap);
      border-radius: 3px;
      background: var(--color-sub-background);
      @extend %ellipsis;

      img {
        display: none;
      }
    }

    &--approved {
      margin-top: var(--small-gap);
      font-size: 12px;
    }

    &--footer {
      display: flex;
      justify-content: space-between;
      margin-top: var(--base-gap);
    }

    &--opinion {
      display: flex;
      color: var(--color-secondary);

      span {
        cursor: pointer;

        & + span {
          margin-left: var(--base-gap);
        }
      }
    }

    &__app {
      display: flex;
    }

    &--app-icon {
      display: flex;
      align-items: center;
      color: var(--color-secondary);

      & + .comment-list-item--app-icon {
        margin-left: var(--base-gap);
      }

      svg {
        width: 15px !important;
        height: 15px !important;
        margin-right: var(--small-gap);
        vertical-align: middle;
      }
    }
  }
}

.comment-list-title {
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 4px;
  background: var(--color-sub-background);
  font-size: 16px;
  text-align: center;
}

</style>
