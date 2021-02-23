'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const port =  9528 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath:'index.html',
  lintOnSave: false, //process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    compress : true,
    disableHostCheck : true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   '^/api': {
    //     target: "10.0.20.2:4000",
    //     pathRewrite:{'^/api':''},
    //     changeOrigin: true,
    //     ws:false,
    //   }
    // },
    before: require('./mock/mockServer.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
