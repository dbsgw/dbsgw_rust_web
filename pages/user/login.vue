<template>
  <el-card class="box-card">
    <div style="text-align: center">
      <h1>Rust中文网</h1>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" placeholder="请输入验证码">
          <el-button slot="append" @click="handelEmail">获取验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <el-form-item style="text-align: center">
        <a @click="handelGitee">
          <rust_-icon type="rust_gitee" style="color: #cb2727;font-size: 30px"></rust_-icon>
        </a>
        <a @click="handelGitHup">
          <rust_-icon type="rust_github" style="font-size: 30px;margin-left: 10px"></rust_-icon>
        </a>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {Message} from "element-ui";
import {RustGitee, RustGitHup} from './login'

export default {
  name: "login",
  layout: "user",
  data() {
    return {
      form: {
        email: '',
        code: ''
      },
      rules: {
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    handelGitee() {
      location.href = RustGitee()
    },
    handelGitHup() {
      console.log(
        RustGitHup
      )
      location.href = RustGitHup()


    },
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log("dengl")
          this.submitLogin(this.form)

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handelEmail() {
      console.log(this.form)
      this.$refs['form'].validateField(["email"], (valid) => {
        console.log(valid)
        if (!valid) {
          this.sendCode(this.form.email)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async sendCode(email) {
      const result = await this.$axios.$get(`/v1/user/login/code?email=${email}`)
      if (result.status !== 200) {
        Message.error(result.msg)
      }
    },
    async submitLogin(obj) {
      let result = await this.$store.dispatch('RustServerInitEmail', obj)
      if (result.status !== 200) {
        Message.error(result.msg)
      } else {
        localStorage.setItem("token", result.data.token)
        this.$router.push({
          "name": "admin-home"
        })
      }
    }
  }

}
</script>

<style scoped>

</style>
