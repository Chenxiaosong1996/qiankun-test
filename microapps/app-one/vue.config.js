const { name } = require('./package.json')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    port: 4001,
    // 允许被主应用跨域fetch请求到
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      // 把子应用打包成umd库格式
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
})
