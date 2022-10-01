# Tree Shaking

如果 .babelrc 目录下配置了 `"useBuiltIns": "usage"`, 那么就可以不引入 `import "@babel/polyfill"` 了

要实现我引入什么，帮我拿什么就需要用到 Tree Shaking

再 development 开发环境下 要引入一个

```js
  optimization: {
    usedExports: true
  },
```

package.json 里面要配置一个 `"sideEffects": false,`
意思是 如果你引入了一个模块 那么 webpack 就会用 Tree Shaking 这个方式打包 但是遇到这种情况 `import '@babel/polly-fill` 没有任何参数接收的情况下， Tree Shaking 会帮你忽略，这不是我们想要的 所以可以改成 false 也可以单独写就写成数组的形式 比如： `sideEffects": ['@babel/polly-fill']` 如果遇到那种导出的 css 模块 就可以写成`sideEffects": ['*.css']`

如果你是 production 模式下，就可以不用

```js
optimization: {
  usedExports: true
},
```

# Develoment 和 Production 模式的区分打包

`npm i webpack-merge -D`

开发环境 使用 `webpack-dev-server` 方便我们开发
线上环境 需要我们对代码进行压缩 所以使用 webpack 打包出文件
然后可以写一个开发环境的配置和一个线上环境的配置，吧一些公用的配置提取出来，通过 webpack-merge 生成当前环境下要使用的 config 内容

# webpack 和 Code Splitting 代码分割

`npm i lodash --save`

```js
import _ from 'lodash';
window._ = _;
```

对代码进行拆分，可以让我们的代码性能更高一些，用户体验更好一些

```js
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
```

意思是 我要帮你去做代码分割了

`npm i babel-plugin-dynamic-import-webpack --save-dev` 不支持魔法注释

就可以自动帮你去做分割了 webpack4 的话要去 .babelrc 里配置

```js
    "plugins": [
        [
            "dynamic-import-webpack",
        ]
    ]
```

安装
`npm i --save-dev @babel/plugin-syntax-dynamic-import` 支持魔法注释

```js
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
```

这些都是默认项，不写就是默认

# Lazy Loading 懒加载, Chunk

懒加载

```js
async function getComponent() {
  const { default: _ } = await import(/*webpackChunkName:"lodash"*/ 'lodash');
  const element = document.createElement('div');
  element.innerHTML = _.join(['xuwei', 'www'], '-');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then((element) => {
    document.body.appendChild(element);
  });
});
```

chunk 是你页面引入一个包，那就算一个 chunk

# Preloading Prefetching

配置 --profile --json > stats.json 意思是 再打包过程中，把一些打包描述放到 stats.json 文件里面 文件的格式是 json 格式

然后就会生成 stats.json 的静态文件 然后去访问 http://webpack.github.io/analyse/ 把这个文件放上去，就可以帮你分析了

webpackPreloading: true 是跟你的主模块一块加载

webpackPrefetch: true 就是等你游览器有空余的时间的时候，就会偷偷的去帮你加载一下，就不用等到你去点击的时候再加载了，当你再点击的时候，就是直接拿缓存了

# CSS 文件的代码分割

`npm i --save-dev mini-css-extract-plugin ` 适合在线上环境上使用

要先引入`const MiniCssExtractPlugin = require('mini-css-extract-plugin')`

```js
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({})
    ]
```

`npm i optimize-css-assets-webpack-plugin -D` webpack5 不支持

使用 ` npm install css-minimizer-webpack-plugin --save-dev`

```js
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
```

然后代码就会被压缩合并

```css
body {
  background-color: #afeeee;
  font-size: 100px;
}
```

# Webpack 与浏览器缓存（Caching）

`performance: false` 不让他提示我们一些性能上的问题

为了防止用户刷新后，请求的文件还是和源文件一样，不会因为你修改了代码看到最新的内容，所以会用到 hash，这样可以去解决文件名一样的问题，就保证，我在项目里更改代码，不会影响到线上的问题，因为每次你的文件发生了改变，hash 也会变得不一样
