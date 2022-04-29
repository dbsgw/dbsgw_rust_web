export const state = () => ({
  info: {
    name:1
  },
})

export const mutations = {
  UPDATE_GLOBAL_INFO(state, info) {
    state.info = info
  },
}

export const actions = {
  // 获取授权同时获取信息 gitee
  async RustServerInitGitee({commit},code) {
    try {
      const result = await this.$axios.$get(`/v1/user/login/oauth/gitee?code=${code}`)
      const userinfo = result.data.data
      console.log(userinfo,"code")
      commit('UPDATE_GLOBAL_INFO', userinfo)
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // 获取授权同时获取信息 gitHup
  async RustServerInitGitHup({commit},code) {
    try {
      const result = await this.$axios.$get(`/v1/user/login/oauth/githup?code=${code}`)
      const userinfo = result.data.data
      console.log(userinfo,"code")
      commit('UPDATE_GLOBAL_INFO', userinfo)
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
