<template>
  <header class="header">
    <div class="header_content wrap">
      <div class="logo">
        <h1>rust</h1>
        <nuxt-link :to="{ name: 'index' }" class="block">
          <img
            src="https://aws1.discourse-cdn.com/business5/uploads/rust_lang/original/2X/e/e260a60b8dca4dae6ce7db98c45bb5008e6fdc62.png"
            class="vertical-middle" height="40">
        </nuxt-link>
      </div>
      <div class="nav_wrapper">
        <ul class="nav_wrapper_ul">
<!--          <li class="nav_wrapper_ul_li">-->
<!--            <nuxt-link to="/">-->
<!--              首页-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          <li class="nav_wrapper_ul_li">-->
<!--            <nuxt-link to="/user">-->
<!--              用户-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          <li class="nav_wrapper_ul_li">-->
<!--            <nuxt-link to="/">-->
<!--              首页-->
<!--            </nuxt-link>-->
<!--          </li>-->

        </ul>
      </div>
      <div class="search_wrapper">
        <el-input placeholder="请输入关键字" size="small" v-model="searchText">
          <el-button slot="append" icon="el-icon-search" class="search_button"></el-button>
        </el-input>
      </div>
      <div class="user_wrapper">
        <el-button size="small" type="text" @click="handelLogin">登录</el-button>
        <el-button size="small" type="warning" plain @click="handelRegister">注册</el-button>
      </div>
    </div>
    <loginModel ref="loginModel"/>
    <div>
      <registerModel ref="registerModel"/>
    </div>
  </header>
</template>

<script>
import loginModel from "@/components/Login/loginModel";
import registerModel from "@/components/Login/registerModel";

export default {
  name: "AppHeader",
  data() {
    return {
      searchText: '',
    }
  },
  components: {
    loginModel,
    registerModel
  },
  methods: {
    handelLogin() {
      this.$refs.loginModel.show()
    },
    handelRegister() {
      console.log(this.$refs.registerModel.data, "===this.$refs.registerModel")
      this.$refs.registerModel.show()
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: var(--color-sub-background);


  .header_content {

    display: flex;
    align-items: center;
    height: 60px;

    .logo {
      h1 {
        position: fixed;
        top: -500%;
        left: 0;
      }
    }

    .nav_wrapper {
      flex: 1;
      margin: 0 auto;

      .nav_wrapper_ul {
        display: flex;
        align-items: center;

        .nav_wrapper_ul_li {
          padding: 0 20px;
          font-size: 16px;
        }
      }
    }

    .user_wrapper {
      margin-left: $container-margin;
    }
  }
}

</style>
