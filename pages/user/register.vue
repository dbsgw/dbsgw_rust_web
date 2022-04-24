<template>
    <el-card class="box-card">
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="昵称" prop="username">
          <el-input v-model="form.username" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
export default {
  name: "login",
  layout: "user",
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }

}
</script>

<style scoped>

</style>
