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
                  {{ scope.row.article_title }}
                </el-col>
                <el-col :span="7">
<!--                  454-->


                </el-col>
                <el-col :span="2">
                  {{ scope.row.user_name || "无" }}
                </el-col>
                <el-col :span="3">
                  {{ moment(scope.row.article_time * 1000).format('MM月DD日 - hh:mm') }}
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
        :page-sizes="[20, 50, 100, 500]"
        layout="total,sizes, prev, pager, next"
        :total="paginationPage.total">
      </el-pagination>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  name: 'IndexPage',
  data() {
    return {
      activeIndex: "1",
      loading: false,
      currentPage: 1,
      tableData: [],
      // 分页参数
      paginationPage: {
        size: 20,
        page: 1,
        total: null
      }
    }
  },
  methods: {
    moment,
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.paginationPage.size = val
      this.getList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paginationPage.page = val
      this.getList()
    },
    async getList() {
      let data = {
        ...this.paginationPage
      }
      const result = await this.$axios.$get("/v1/user/article", {
        params: data
      })
      console.log(result)
      this.tableData = result.data.result
      this.paginationPage.total = result.data.total
    }
  },
  mounted() {
    this.getList()
  },
  // async asyncData({app}) {
  //   const result = await app.$axios.$get(`http://127.0.0.1:3000/v1/admin/article`,{
  //     params:fa
  //   })
  //   return { articleObject: result.data }
  //
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
