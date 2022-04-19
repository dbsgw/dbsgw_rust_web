<template>
  <el-container>
    <el-header ref="header">
      <AppHeader/>
    </el-header>
    <el-container class="wrap" ref="main">
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <el-footer ref="footer" style="height: auto">
      <AppFooter/>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "default",
  created() {
    this.$nextTick(() => {
      if (process.browser) {
        this.$refs.main.height = window.innerHeight
        console.log(111, this.$refs.footer.height, this.$refs.header.height, this.$refs.main,window.innerHeight)
      }
    })
  }
}
</script>

<style scoped>

</style>
