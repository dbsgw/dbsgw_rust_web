import {Message, Loading, MessageBox} from 'element-ui'

export default function ({store, redirect, app: {$axios}}) {
  // 后端接口地址
  $axios.defaults.baseURL = process.env.NODE_ENV == "development" ? "/api" : "/api"

  // Request拦截器：设置Token
  $axios.onRequest((config) => {
    // 使用Vuex存储Token，并做持久化处理
    var token = localStorage.getItem("token")
    if (token) {
      config.headers['Authorization'] = token
    }
  })
  // Error拦截器：出现错误的时候被调用，根据状态码做对应判断并显示全局Message
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 400:
        Message.error('请求错误')
        break;
      // 未登录
      case 401:
        MessageBox.confirm("系统检测到您的账号长时间未操作或账号在其他设备登录, 是否重新登录?", '警告', {
          confirmButtonText: '去登录',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          store.commit("CLEAR")
          localStorage.removeItem("token")
          window.location = window.location.origin
        }).catch(() => {
        })
        break;
      case 403:
        Message.error('拒绝访问')
        break;
      case 404:
        Message.error(`请求地址出错: ${error.response.config.url}`)
        break;
      case 408:
        Message.error('请求超时')
        break;
      case 500:
        Message.error('服务器内部错误')
        break;
      case 501:
        Message.error('服务未实现')
        break;
      case 502:
        Message.error('网关错误')
        break;
      case 503:
        Message.error('服务不可用')
        break;
      case 504:
        Message.error('网关超时')
        break;
      case 505:
        Message.error('HTTP版本不受支持')
        break;
      default:
        break;
    }
  })
}
