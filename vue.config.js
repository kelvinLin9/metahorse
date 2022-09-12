const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 修正檔案命名問題
  lintOnSave: false,

  publicPath: '/metahorse/dist'
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/metahorse/' : '/'
// }

// place it with same level of package.json
// vue.config.js 設定指南 : https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
// module.exports = {
//   // publicPath 為 project-name，根目錄地址為上傳的網域
//   publicPath: '/metahorse/'
// }
