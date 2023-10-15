const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "./"
    }
  },
  //开启代理服务器(方式一) 只能配置一个代理服务器
  // devServer:{
  //   //写需要请求的服务器的位置
  //   proxy:'http://localhost:5000'
  // }

  //开启代理服务器(方式二) 能配置多个代理服务器
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        //重写路径将 /api去掉
        pathRewrite:{'^/api':''},
        ws:true, //用于支持 websocket
        changeOrigin:true //用于控制请求头中的host值
      },
      // '/demo':{
      //   target:'http://localhost:6363',
      //   //重写路径将 /demo 去掉
      //   pathRewrite:{'^/demo':''},
      //   ws:true, //用于支持 websocket
      //   changeOrigin:true //用于控制请求头中的host值
      // }
    }
  }
})
