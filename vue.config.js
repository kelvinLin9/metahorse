const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 修正檔案命名問題
  lintOnSave: false,

  publicPath: '/metahorse/'
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/metahorse/' : '/'
// }
