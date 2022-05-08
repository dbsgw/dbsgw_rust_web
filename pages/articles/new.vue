<template>
  <el-card class="box-card" style="min-height: 500px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <editor-vue-mavon-editor  @change="changes" ref="editor"></editor-vue-mavon-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="handelGo">取消</el-button>
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
        title: null,
      },
      RustHtml: null,
      RustMk: null,
      createAndEdit: 1, // 枚举 1是创建  2是 编辑
    }
  },
  async created() {
    console.log(this.$route.query.id)
    if (this.$route.query.id) {
      this.createAndEdit = 2
      const result = await this.$axios.$get(`/v1/admin/article/${this.$route.query.id}`)
      if (result.status !== 200) {
        this.$message.error(result.msg)
      } else {
        console.log(result.data)
        this.form.title = result.data.article_title
        this.$refs.editor.handbook = result.data.article_content_mk
      }
    }
  },
  methods: {
    handelGo() {
      this.$router.push({
        "name": "admin-home",
      })
    },
    async onSubmit() {
      console.log(this.form, this.RustHtml)
      let data = {
        title: this.form.title,
        connect: this.RustHtml,
        connect_mk: this.RustMk
      }

      if (this.createAndEdit == 1) {
        const result = await this.$axios.$post("/v1/admin/article", data)
        if (result.status !== 200) {
          this.$message.error(result.msg)
        } else {
          this.$message.success(result.msg)
          this.$router.push({
            "name": "admin-home",
          })
        }
      } else if (this.createAndEdit == 2) {
        const result = await this.$axios.$put(`/v1/admin/article/${this.$route.query.id}`, data)
        if (result.status !== 200) {
          this.$message.error(result.msg)
        } else {
          this.$message.success(result.msg)
          this.$router.push({
            "name": "admin-home",
          })
        }
      }
    },
    changes(s, r) {
      this.RustHtml = r
      this.RustMk = s
      console.log(r)
    }
  }

}
</script>

<style scoped>

</style>
