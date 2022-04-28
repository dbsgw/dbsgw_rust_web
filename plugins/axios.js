import { Message ,Loading} from 'element-ui'
export default function ({ store, redirect, app: { $axios } }) {
  // 后端接口地址
  $axios.defaults.baseURL = process.env.NODE_ENV == "development" ? "/api" : "https://aabbcc.com/api"

  // Request拦截器：设置Token
  $axios.onRequest((config) => {
    // 使用Vuex存储Token，并做持久化处理
    config.headers['Authorization'] = localStorage.getItem("token")
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
        Message.error("Token过期")
        localStorage.clear();
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
