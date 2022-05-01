export const state = () => ({
  info: {
    name: 1
  },
})

export const mutations = {
  UPDATE_GLOBAL_INFO(state, info) {
    state.info = info
  },
  // 清空 state
  CLEAR(state) {
    state.info = {}
  }
}

export const actions = {
  // 获取授权同时获取信息 gitee
  async RustServerInitGitee({commit}, code) {
    try {
      const result = await this.$axios.$get(`/v1/user/login/oauth/gitee?code=${code}`)
      if (result.status == 200) {
        const userinfo = result.data.data
        console.log(userinfo, "code")
        commit('UPDATE_GLOBAL_INFO', userinfo)
      }
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // 获取授权同时获取信息 gitHup
  async RustServerInitGitHup({commit}, code) {
    try {
      const result = await this.$axios.$get(`/v1/user/login/oauth/githup?code=${code}`)
      if (result.status == 200) {
        const userinfo = result.data.data
        console.log(userinfo, "code")
        commit('UPDATE_GLOBAL_INFO', userinfo)
      }
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // 获取授权同时获取信息 email
  async RustServerInitEmail({commit}, obj) {
    try {
      const result = await this.$axios.$get(`/v1/user/login?email=${obj.email}&code=${obj.code}`)
      if (result.status == 200) {
        const userinfo = result.data.data
        console.log(userinfo, "code")
        commit('UPDATE_GLOBAL_INFO', userinfo)
      }

      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // 获取用户信息
  async RustUserInfo({commit}, uid) {
    try {
      const result = await this.$axios.$get(`/v1/user/info/${uid}`)
      if (result.status == 200) {
        const userinfo = result.data
        console.log(userinfo, "code")
        commit('UPDATE_GLOBAL_INFO', userinfo)
      }

      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
