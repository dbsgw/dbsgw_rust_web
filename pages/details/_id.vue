<template>
  <section class="container">
    <article class="section article">
      <h2 class="title">{{ articleObject.article_title }}</h2>
      <div class="other-info">
        <p>
          <span class="author">
            <Rust_Icon type="rust_yaoqinghaoyou"></Rust_Icon>
            刘洋
          </span>
          <time class="time m-l-5px keep-all">
            <rust_-icon type="rust_shijian"></rust_-icon>
            2021-07-26 00:42:24
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
  </section>
</template>

<script>
export default {
  name: "Details",
  components: {},
  data() {
    return {
      articleObject: {},
      paramsId: null
    }
  },
  // async fetch({params, store,axios}) {
  //   this.paramsId = params.id
  //   // console.log(params, params.id)
  //   const result = await axios.get(`/v1/admin/article/${params.id}`)
  //   // console.log(result)
  //   // store.dispatch('article/updateArticleViewCount', { id: params.id })
  //   // return store.dispatch('article/getArticleDetail', params.id)
  // },
  async created() {
    console.log(this.$route.params.id)
    const result = await this.$axios.$get(`/v1/admin/article/${this.$route.params.id}`)
    this.articleObject = result.data
    console.log(result)
  },
  head() {
    // const keywords = []
    // this.detail.articleInfor.tags && this.detail.articleInfor.tags.forEach(item => keywords.push(item.name))
    return {
      title: `张三`,
      meta: [
        {hid: 'keywords', name: 'keywords', content: 'dad大大'},
        {hid: 'description', name: 'description', content: 'dad大大'}
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

</style>
