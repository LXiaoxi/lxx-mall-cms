const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components:'@/components'
      }
    }
  },

  devServer:{
    //解决跨域访问
    proxy:{
      '/api':{
        target:'http://152.136.185.210:5000',
        pathRewrite:{
          '/api':''
        },
        changeOrigin:true
      }
    },
    // open:true,
    // host:'127.0.0.1',
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
})
