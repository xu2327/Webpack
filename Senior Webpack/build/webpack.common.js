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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
        }
    },
    performance: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
    }
}