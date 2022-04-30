<template>
  <el-card class="box-card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="1">用户管理</el-tab-pane>
      <el-tab-pane label="帖子管理" name="2">帖子管理</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeName: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>
