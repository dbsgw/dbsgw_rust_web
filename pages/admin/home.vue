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
          <el-form-item label="手机号" prop="mobile">
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
            prop="article_id"
            label="文章id">
          </el-table-column>
          <el-table-column
            prop="article_title"
            label="标题"
          >
          </el-table-column>
          <el-table-column
            prop="article_time"
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
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
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
    this.getArticleAll()
  },
  data() {
    return {
      activeName: '1',
      form: {
        nick_name: '',
        mobile: '',
      },
      tableData: [],
      rules: {
        nick_name: [
          {required: true, message: '请输入个人昵称', trigger: 'blur'},
          {min: 2, max: 32, message: '长度在 2 到 32 个字符', trigger: 'blur'}
        ],
        mobile: [
          {required: true, message: '请输入个人手机号', trigger: 'blur'},
          {pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: ['blur', 'change']},
          {min: 9, max: 16, message: '长度在 9 到 16 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({
        "name": "articles-new",
        query: {
          id: row.article_id
        }
      })
    },
    async handleDelete(index, row) {
      const result = await this.$axios.$delete(`/v1/admin/article/${row.article_id}`)
      if (result.status !== 200) {
        this.$message.error(result.msg)
      } else {
        this.$message.success(result.msg)
        await this.getArticleAll()
      }
      console.log(result)
      console.log(index, row)
    },
    async getArticleAll() {
      const result = await this.$axios.$get("/v1/user/article")
      if (result.status !== 200) {
        this.$message.error(result.msg)
      } else {
        this.tableData = result.data.result
      }
      console.log(result)
    },
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
