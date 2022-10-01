const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js',
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
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000, //大于20kb就不做代码分割
            minRemainingSize: 0,
            minChunks: 1, // 最少引入一次 lodash
            maxAsyncRequests: 30, // 同时加载模块库最多30个
            maxInitialRequests: 30, // 入口文件加载的时候最多30个
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 优先级
                    reuseExistingChunk: true, // 如果模块被打包过了，就忽略
                    filename: 'vendors.js'
                },
                default: {
                    // minChunks: 2,
                    priority: -20, // 优先级
                    reuseExistingChunk: true, // 如果模块被打包过了，就忽略
                    filename: 'common.js'
                },
            },
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    }
}