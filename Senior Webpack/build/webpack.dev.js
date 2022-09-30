const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    // 指定端口
    port: 8000,
    // 指定路径
    static: path.join(__dirname, './dist'),
    open: true,
    hot: true,
    // hotOnly: true // webpack 5 好像不支持
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
};

module.exports = merge(commonConfig, devConfig)
