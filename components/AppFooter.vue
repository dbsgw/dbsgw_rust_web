<template>

  <footer class="footer">
    <div class="wrap">
      <p>©2013-2022 Rust.com Rust语言中文网，中国 Rust 社区，致力于构建完善的 Rust 中文社区，Rust语言爱好者的学习家园。</p>
      <p>Powered by dbsgw(Golang + MySQL) • · CDN 采用 七牛云</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  background-color: var(--color-sub-background);
  font-size: 12px;
  opacity: 0.6;
}
</style>
