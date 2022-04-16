<template>
  <section class="rust_index">
    <div class="table">
      <el-table
        v-loading="loading"
        :show-header="false"
        :data="tableData"
        style="width: 100%">
        <el-table-column>
          <template slot-scope="scope">
            <nuxt-link :to="{ path: 'details/2' }" class="block">
              <el-row>
                <el-col :span="12">
                  帮我扒一下网站的JS....jsonToYaml()和yamlToJson()
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
      loading: false,
      currentPage: 1,
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
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    // this.$axios.$get("/5555dada", (con) => {
    //   console.log(con)
    // })
    console.log(111)
  },
  // async asyncData({$axios}) {
  //   let data = await $axios.get('/4545xxxxx');
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
