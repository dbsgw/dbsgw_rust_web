<template>
  <el-container>
    <el-header>
      <AppHeader/>
    </el-header>
    <el-container class="wrap">
      <el-container>
        <el-main>
          <nuxt/>
        </el-main>
        <el-aside style="padding: 20px 0;width: 200px">
          <AppAside/>
        </el-aside>
      </el-container>
    </el-container>
    <el-footer>
      <AppFooter/>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
