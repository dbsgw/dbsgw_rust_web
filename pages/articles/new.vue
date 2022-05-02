<template>
  <el-card class="box-card" style="min-height: 500px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <editor-vue-mavon-editor @change="changes"></editor-vue-mavon-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "articles_new",
  components: {},
  data() {
    return {
      form: {
        title: '',
      },
      RustHtml: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form, this.RustHtml)
    },
    changes(s, r) {
      this.RustHtml = r
      console.log(r)
    }
  }

}
</script>

<style scoped>

</style>
