const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 修正檔案命名問題
  lintOnSave: false,

  publicPath: '/0524_vuecli_test/dist/'
})
