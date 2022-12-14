const path = require('path');
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 指定端口
    port: 8000,
    // 指定路径
    static: path.join(__dirname, './dist'),
    open: true,
    hot: true,
    // hotOnly: true // webpack 5 好像不支持
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  }
};

module.exports = devConfig
