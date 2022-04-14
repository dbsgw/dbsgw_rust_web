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
        <el-aside width="200px" style="background-color: red;padding: 20px">Aside</el-aside>
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
