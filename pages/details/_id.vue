<template>
  <section class="container">
    <article class="section article">
      <h2 class="title">golang不适合写哪些复杂的业务逻辑？能否举例说明下</h2>
      <div class="other-info">
        <p>
          <span class="author">
            <i class="el-icon-share"></i>
            刘洋
          </span>
          <time class="time m-l-5px keep-all">
            <i class="el-icon-share"></i>
            刚刚
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
             <i class="el-icon-share"></i>
            火
          </span>
          <span class="m-l-5px">
             <i class="el-icon-share"></i>
            留言
          </span>
        </p>
      </div>
      <div class="content-details" ref="articleContent">
        无非就是多写几行代码而已。 只是每次多写的几行代码看起来不那么优雅而已，慢慢这种代码多了就觉得枯燥。

        比如java中计算一个列表中某个字段的值。int sum = =users.stream().mapToInt(User::getPoint).sum()

        在go中只能 外部定义一个变量，然后用for循环去做了，。业务是多变的，经常会有这样转来转去的数据处理的需求出现。当然go中也有类似第三方库，只是没有被企业大量使用不那么成熟。

        当然这只是举一个例子。

        没有go不能做的，在业务开发上来说，不过也分行业的，有些视频，IM，等行业更适合go。 金融，支付，电商，推荐等业务复杂多变的java更合适。

        但是你为啥要去做业务呢？业务党基本很容易被毕业，多点有技术含量，又不像业务那样多变的，比如云原生基础设施，中间件不好么
      </div>
    </article>
    <!-- 文章内容结束 -->
  </section>
</template>

<script>
export default {
  name: "Details",
  fetch({ params, store }) {
    console.log(params)
    // store.dispatch('article/updateArticleViewCount', { id: params.id })
    // return store.dispatch('article/getArticleDetail', params.id)
  },
  head() {
    // const keywords = []
    // this.detail.articleInfor.tags && this.detail.articleInfor.tags.forEach(item => keywords.push(item.name))
    return {
      title: `张三`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'dad大大' },
        { hid: 'description', name: 'description', content: 'dad大大' }
      ],
      style: [
        // { cssText: this.info.detailsCss, type: 'text/css' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped >
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
    .m-l-5px{
      margin-left: 5px;
    }

    .iconfont {
      vertical-align: baseline;
    }
  }
}

</style>
