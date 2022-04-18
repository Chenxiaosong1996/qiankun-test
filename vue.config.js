const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: './',
  // 输出路径
  outputDir: 'dist',
  // 静态资源
  assetsDir: './',
  // eslint-loader是否在保存时候检查
  lintOnSave: true,
  // 服务项配置
  devServer: {
    open: true,
    port: 4000, //设置当前项目的端口号
    // 设置代理proxy
    proxy: {
      '/xx': {
        target: 'http://its.dev.etongeis.com:38001', // 都昌服务器
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/xx': '', // 去掉接口地址中的api字符串
        },
      },
    },
  },
})
