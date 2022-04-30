<template>
  <el-card class="box-card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="1">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="form.nick_name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">更新资料</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="帖子管理" name="2">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="标题"
           >
          </el-table-column>
          <el-table-column
            prop="作者"
            label="姓名"
           >
          </el-table-column>
          <el-table-column
            prop="address"
            label="分类">
          </el-table-column>
          <el-table-column
            prop="address"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="评论">
          </el-table-column>
          <el-table-column
            prop="address"
            label="阅读">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeName: '1',
      form: {
        nick_name: '',
        mobile: '',
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>
