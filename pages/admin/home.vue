<template>
  <el-card class="box-card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="1">
        <el-form ref="form" :model="form" :rules="rules" label-width="130px">
          <el-form-item label="ID">
            <h3>1uJNTVyccwau8_kUSsJs2</h3>
          </el-form-item>
          <el-form-item label="昵称" prop="nick_name">
            <el-input v-model="form.nick_name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="第三方帐号绑定">
            <a @click="binGitee">
              <rust_-icon type="rust_gitee" style="color: #cb2727;font-size: 30px"></rust_-icon>
            </a>
            <a @click="binGitHup">
              <rust_-icon type="rust_github" style="font-size: 30px;margin-left: 10px"></rust_-icon>
            </a>
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
import {Message} from "element-ui";

export default {
  name: "home",
  created() {
    this.form.nick_name = this.$store.state.info.nick_name
    this.form.mobile = this.$store.state.info.mobile
  },
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
      }],
      rules: {
        nick_name: [
          {required: true, message: '请输入个人昵称', trigger: 'blur'},
          {min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    binGitee() {
      console.log("绑定gitee")
    },
    binGitHup() {
      console.log("绑定gitHup")
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {

          var data = {
            NickName: this.form.nick_name,
            Mobile: this.form.mobile,
          }
          const result = await this.$axios.put(`/v1/user/info/${this.$store.state.info.uid}`, data)
          if (result.status !== 200) {
            this.$message.error(result.msg)
          } else {
            this.$message.success("修改成功")
            this.resetUserInfo()
          }
          console.log(result)

        } else {
          console.log('error submit!!');
          return false;
        }
      });
      console.log('submit!');
    },
    resetUserInfo() {
      this.$store.dispatch("RustUserInfo", this.$store.state.info.uid)
    }
  },
}
</script>

<style scoped>

</style>
