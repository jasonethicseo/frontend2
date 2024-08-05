const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'bootstrap-vue'
  ],
  devServer: {
    proxy: {
      "/api": {	
        target: "http://internal-test-lb-ecs-back-970728-1145845113.ca-central-1.elb.amazonaws.com",
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      }
    }
  },
  lintOnSave: false
});
