var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

// 区分生产环境和开发环境
const ENV = process.env.NODE_ENV

const config = {
  // 入口
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },
  // 出口
  output: {
    // filename: 'bundle.js',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  // plugins
  plugins: [
    // 用于把打包(编译)后的js脚本与index.html关联起来
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'react'
    })
  ],
  // 模块化：在webpack眼中，一切文件都是模块
  module: {
    rules: [
      // 打包或编译时，当检测到是.js文件时，我就用babel-loader来进行加载，使用Babel编译器进行代码编译
      // 安装@babel/core  @babel/preset-env  @babel/preset-react
      { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
      // 打包或编译时，当检测到是图片后缀的模块时，就使用file-loader进行加载
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      // 如果是scss文件，必须使用这三个loader进行加载与处理
      // 要安装node-sass，它的作用是把浏览器识别不了sass文件转化成css
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 省略扩展
    extensions: ['.js', '.json']
  }
}

// 执行 npm run build 时特有的配置
if (ENV === 'production') {
  config.mode = 'production'
  // 清理dist目录
  config.plugins.push(new CleanWebpackPlugin())
}

// 执行 npm run serve 时特有的配置
if (ENV==='development') {
  config.mode = 'development'
  // 用于调试，当浏览器中报错，指定是源码中的报错位置，而不是编译后的代码中的位置
  config.devtool = 'source-map'
  // 给开发环境添加特有的本地服务webpack-dev-server
  config.devServer = {
    port: 8090,
    open: true,
    // 指定本地静态资源服务器
    // contentBase: './public'
    contentBase: path.resolve(__dirname, 'public'),
    // 开启热更新，启动本地服务时创建一个websocket长连接
    // 当代码有变化时，把变化的数据推送客户端进行更新
    hot: true,
    // 当eslint报错时，让错误覆盖在视图之上
    overlay: {
      errors: true
    },
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
  // 用于热更新的两个插件
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  // 配置开发环境独有的ESLint
  // enforce='pre'指定这个loader是前置loader，当它出错时，其它正常的loader是不工作的
  // 要安装eslint，它的作用是真正用于检测代码规范的
  // 还要加 .eslintrc.json 这个配置文件
  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      use: ['eslint-loader'],
      exclude: /node_modules/,
      enforce: 'pre'
    }
  )
}

module.exports = config
