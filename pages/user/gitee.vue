<template>
  <el-card class="box-card">
    <div style="text-align: center">
      <h1>Rust中文网</h1>
    </div>
    <div
      style="position: fixed;left: 0;top: 0;background-color: rgba(0,0,0,0.6);z-index: 99;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;color: #ffffff">
      <h1>Rust中文网 【Gitee】授权中。。。</h1>
    </div>
  </el-card>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "gitee",
  layout: "12",
  data() {
    return {
      code: "100"
    }
  },
  async beforeCreate() {
    console.log(this.$route.query.code)
    let result = await this.$store.dispatch('RustServerInitGitee', this.$route.query.code)
    console.log(result)
    if (result.status !== 200) {
      Message.error(result.msg)
    } else {
      localStorage.setItem("token", result.data.token)
      this.$router.push({
        "name": "admin-home"
      })
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
