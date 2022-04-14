<template>
  <aside class="aside">
    <!-- 公告栏 -->
    <div class="sidebar-list notice">
      <div class="header">
        <p>
          <i class="el-icon-share"></i>
          公告12123123
        </p>
      </div>
      <div class="content">
        Powered by dbsgw(Golang + MySQL)©2013-2022 Ru.com Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022 Rust.com
        Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022 Rustst.com Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022
        Rust.com Rust语言中文©2013-2022 Rust.com Rust语言中文
      </div>
    </div>

    <!-- 站点统计 -->
    <div  class="sidebar-list count">
      <div class="header">
        <p>
          <i class="el-icon-edit-outline"></i>
          站点统计
        </p>
      </div>
      <ul class="content">
        <li class="list">标签：1个</li>
        <li class="list">文章：2篇</li>
        <li class="list">页面：3个</li>
        <li class="list">评论：5条</li>
        <li class="list">分类：6个</li>
        <li class="list">最后更新：8</li>
      </ul>
    </div>


    <!-- 公告栏 -->
    <div class="sidebar-list notice">
      <div class="header">
        <p>
          <i class="el-icon-share"></i>
          公告12123123
        </p>
      </div>
      <div class="content">
        Powered by dbsgw(Golang + MySQL)©2013-2022 Ru.com Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022 Rust.com
        Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022 Rustst.com Rust语言中文©2013-2022 Rust.com Rust语言中文©2013-2022
        Rust.com Rust语言中文©2013-2022 Rust.com Rust语言中文
      </div>
    </div>

  </aside>
</template>

<script>
export default {
  name: "AppAside"
}
</script>

<style lang="scss" scoped>
.aside {
  font-size: 14px;
  .sidebar-list {
    margin-top: $container-margin;
    padding: 10px;
    border-radius: $border-radius;
    background: var(--color-sub-background);
    margin-bottom: 20px;
    &:first-of-type {
      margin-top: 0;
    }

    .header {
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid var(--color-border);

      p {
        position: relative;
        display: inline-block;

        .iconfont {
          font-size: $font-size-large;
        }

        &:after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: $color-theme;
        }
      }
    }


    // 站点统计
    &.count {
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 12px;
      }

      .list {
        margin-top: 10px;

        &:nth-of-type(odd) {
          width: 40%;
        }

        &:nth-of-type(even) {
          width: 58%;
        }
      }
    }
  }
}
</style>
