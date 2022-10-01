const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    externals: 'lodash',
    output: {
        filename: 'library.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'library',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,//不将注释提取到单独的文件中
            }),
        ],
    }
}