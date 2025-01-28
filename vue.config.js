const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'bootstrap-vue'
  ],
  devServer: {
    proxy: {
      "/api": {	
        target: "http://my-backend.default.svc.cluster.local:8080",
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      }
    }
  },
  lintOnSave: false
});
