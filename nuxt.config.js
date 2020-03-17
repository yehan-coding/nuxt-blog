
module.exports = {
  mode: 'universal',
  head: {
    title: '叶寒 | 张彤 - 个人网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'chinaz-site-verification', content: '637254A11A39E0A4' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: '张彤,叶寒,JS,javascript,java,前端,后台,vue,react,网络,IT,技术,博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: false,
  css: [
    { src: '~assets/font-awesome/css/font-awesome.min.css' },
    { src: '~assets/css/github-markdown.min.css' },
    { src: '~assets/css/style.css' }
  ],
  plugins: [
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://api.yesterdaypub.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  build: {
    extend (config, ctx) {
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
