<template>
  <el-container style="width: 1200px;margin: 0 auto">
    <el-header style="background-color: beige">Header</el-header>
    <el-container>
      <el-container>
        <el-main>
          <nuxt/>
        </el-main>
        <el-aside width="200px" style="background-color: red">Aside</el-aside>
      </el-container>
      <el-footer style="background-color: aqua">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
