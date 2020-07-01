/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-06-29 14:56:52
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-01 16:49:32
 */ 

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
    '~/plugins/axios'
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
      target: 'https://api.zhangtong.work',
      secure: false,
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
