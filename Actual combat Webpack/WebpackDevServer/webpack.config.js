const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    main: './src/index.js',
  },
  devServer: {
    // 指定端口
    port: 8080,
    // 指定路径 
    static: path.join(__dirname, './dist'),
    open: true,
    hot: true,
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       from: /abc.html/,
    //       to: '/list.html/'
    //     }
    //   ]
    // },
    // hotOnly: true // webpack 5 好像不支持
    proxy: {
      '/react/api': {
        target: 'http://www/dell-lee.com',
        secure: false,
        pathRewrite: {
          'header.json': 'demo.json'
        },
        changeOrigin: true,
        headers: {
          host: 'www.dell-lee.com',
          cookie: 'sdfsfasdafsdf'
        }
      }
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // type: 'asset', // (webpack 5)
        // (webpack 4)
        loader: 'file-loader',
      },
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
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
};
