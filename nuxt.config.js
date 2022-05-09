export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rust中文网',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3334104_ca9w7wnwgc.css'},// 阿里云字体图标
    ],
    script: [
      // 百度主推文章收录用
      // { src: 'https://zz.bdstatic.com/linksubmit/push.js' },
      // 加入百度统计js，使用时自行添加为自己的
      // { src: 'https://hm.baidu.com/hm.js?' }
    ]
  },

  // 自定义 loading 加载
  loading: './components/Loading',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'mavon-editor/dist/css/index.css',
    './assets/css/index.scss',
  ],
  styleResources: {
    scss: ['./assets/css/variable.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {src: '~/plugins/common', mode: 'client', ssr: false},
    {
      src: '~/plugins/axios',
      mode: 'client', // 设置 这个插件就是在客户端渲染时，才会触发
      ssr: false
    },
    {src: '~/plugins/icon'},
    {src: '~/plugins/store.js', ssr: false},
    {src: '@/plugins/vue-mavon-editor', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  env: {
    baseUrl: '/api'
  },

  // 配置axios跨域的
  axios: {
    proxy: true
  },
  // 将此处2个地址改为自己的地址
  proxy: {
    '/api': {
      // target: 'https://www.xuanmo.xin',
      target: 'http://127.0.0.1:3000',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/wp-content': {
      // target: 'https://www.xuanmo.xin'
      target: 'http://localhost:5100'
    }
  },
}
