<template>
  <el-dialog
    title="注册"
    :visible.sync="dialogVisible"
    width="30%"
    :close-on-click-modal="false"
    append-to-body
  >
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" type="username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input v-model="form.password2" type="password2"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "registerModel",
  data() {
    return {
      dialogVisible: false,
      form: {
        email: '',
        password: '',
        username: '',
        password2: '',
      },
      rules: {
        email: [
          // {validator: this.$rules.validateEMail, trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个', trigger: 'blur'}
        ],
        password: [
          {min: 3, max: 18, message: '长度在 3 到 18 个', trigger: 'blur'}
        ],
      }
    };
  },
  created() {
    console.log(1111,this, this.$rules)
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    show() {
      this.dialogVisible = true
    },
    hide() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
