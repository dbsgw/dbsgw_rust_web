<template>
  <section class="rust_index">
    <div class="screen">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">最新</el-menu-item>
        <el-menu-item index="3">最热</el-menu-item>
      </el-menu>
    </div>
    <div class="table">
      <el-table
        v-loading="loading"
        :show-header="false"
        :data="tableData"
        style="width: 100%">
        <el-table-column>
          <template slot-scope="scope">
            <nuxt-link :to="{ path: `details/${scope.row.article_id}` }" class="block">
              <el-row>
                <el-col :span="12">
                  {{scope.row.article_title}}
                </el-col>
                <el-col :span="7">
                  454
                </el-col>
                <el-col :span="2">
                  枫槿
                </el-col>
                <el-col :span="3">
                  {{ scope.row.date }}
                </el-col>
              </el-row>
            </nuxt-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, prev, pager, next"
        :total="400">
      </el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      activeIndex: "1",
      loading: false,
      currentPage: 1,
      tableData: []
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  async mounted() {
    const result = await this.$axios.$get("/v1/admin/article")
    console.log(result)
    this.tableData = result.data
  },
  // async asyncData({$axios}) {
  //   let data = await this.$axios.$get("/v1/admin/article")
  //   if (data.code == 200) {
  //     return data
  //   } else {
  //     return {}
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.rust_index {
  background: var(--color-sub-background);
  padding: $container-padding;

  .table {
    min-height: 50vh;

  }

  .block {
    margin-top: 15px;
  }
}
</style>
