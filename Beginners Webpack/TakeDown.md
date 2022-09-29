# 图片

当我们遇到图片内容的时候，这个时候 webpack 不知道怎么打包.jpg | .png 类型的文件
我们就可以去配置微博 webpack

```js
module: {
  rules: [
    {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
        },
      },
    },
  ];
}
```

module 里写方法
rules 是个数组里面对象的形式 定义规则
test 是写通配的后缀名
use 是想用什么方法去打包 就得安装 file-loader
`npm i file-loader -D`

options 可以确定好打包出来的格式 占位符
[name] 就是原本图片的名字 [hash] 是编译后的一个随机字符串 [ext] 是默认原图片的后缀名

outputPath 可以指定打包过后的文件存放位置

还有个工具叫 url-loader
也要安装
`npm i url-loader -D`

```js
options: {
    name: '[name]_[hash].[ext]',
    outputPath: 'images/',
    limit: 2048
}
```

也可以同样打包文件他不会生成一个新的图片，会转换成一个字符串，直接放到 bundle.js 里面 但是可以减少一个 http 请求 带来的坏处就是 图片如果特别大，打包生成的 js 图片也会特别大，加载 js 的时间也会很长，加载页面的时间也就会很长，所以只适合图片非常小的图片，比如 2kb，那就可以用 url-loader 这样可以减少一个 http 请求
要实现这么灵活，可以配置一个 limit: 2048
意识是 如果图片大小超过了 2048 字节（2kb）那我就生成一个新的图片，如果小于 2KB 那我就是转换成一个字符串

# CSS

当我们要打包 css 文件的时候， 我们也要去 webpack.config.js 里面去做配置，要引入两个 loader
`npm i style-loader css-loader -D`

```js
module: {
    rules: [{
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
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }
    ]
},
```

css-loader 会分析我们 css 文件的关系，然后回合成一段 css 内容
style-loader 在得到 css-loader 内容后，回帮我们挂在到页面的 head 部分

当我们遇到后缀名是 scss 或者 less 的时候 我们也要安装对应的 loader
我们要安装两个包
`npm i sass-loader node-sass -D`
如果在遇到安装报错的情况下先

1. `npm cache clean -force` 清理掉缓存
2. `npm install -g mirror-config-china`
3. 重新安装自己想要安装的 node_sass 就不会报错了 （这个解决方法，同样试用于别的，本人亲测有效）`npm i sass-loader node-sass -D`

还有 loader 的运行方式是 从上到下 从又到左，所以 style-loader 得放在最左边，不然会报错

如果用到那种 `transform: translate(100px, 100px)` 这种新特性的时候，都会带一个 -webkit- 来帮我们兼容各个浏览器
我们自己手打的话很麻烦，webpack 可以快速的帮我们添加,我们就去配置一个 loader
`npm i postcss-loader -D`
然后要去配置一个 postcss.config.js 文件并安装
`npm i autoprefixer -D`

```js
module.exports = {
  Plugins: [require('autoprefixer')],
};
```

还要配置一个 .browserslistrc 文件 里面写 配置规则 然后运行就可以出来了

```js
last 2 version
> 1%
iOS >= 7
Android > 4.1
Firefox > 20

```

也单一对单独的 loader 做配置

```js
{
    test: /\.(css|scss)$/,
    use: [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
        importLoaders: 2,
        modules: true
        }
    },
    'sass-loader',
    'postcss-loader'
    ],
}
```

importLoaders：2 表示在走 css-loader 之前，还要走两个 loaders，就可以解决，如果引入了两个`import './index.scss'` 的话 可以保证都可以走到 pass-loader 和 sass-loader
importLoaders：1 的话就是在这之前走一个 postcss-loader

modules: true 就是启动模块化，就可以在单独的作用域下执行代码，不会影响到外围
`import style from './index.scss'`
`img.classList.add(style.MM) ` 就要用这种方式添加图片了

# 打包字体文件

把字体包下载下来后把 后缀为 .ttf .woff .woff2 这些文件放到 font 目录下，还要拷贝一下 css 文件，改一下文件路径

webpack 5 得话 配置文件写成

```js
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  type: 'asset', // (webpack 5)
  // (webpack 4)
  // loader: 'file-loader',
},
```

这样就好了，不然会报错

# 使用 plugins

plugin 可以在 webpack 运行到某一个时刻得时候，帮你做一些事情，就像 Vue 得生命周期一样，webpack 在帮你打包好结束之后，plugin 可以帮你做一些事情

可以让你省去些 index.html 得时间
`npm i html-webpack-plugin -D`
然后在 module 下配置一个

```js
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })],
```

HtmlWebpackPlugin 会在打包结束后，自动生成一个 html 文件，并把打包生成得 js 自动引入到这个 html 文件中

template 可以指定一个模板，更具这个模板去帮你自动生成 html 文件

`clean-webpack-plugin -D`
我这里是 4.0 版本 所以 `new CleanWebpackPlugin()` 里面不用放任何参数，而且也要以解构赋值得方式写 `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`

# SourceMap

配置 `devtool: 'source-map'` 可以帮你检测出哪里有错误
如果加个 inline `devtool: 'inline-source-map'` 就是会把编译的字符串一起放到 main.js 里面，而且会告诉你第几行第几列出错了，比较耗费性能
如果加个 cheap 就只会告诉你第几行出错了，这样性能就会得到一定的提升
module 就是不对引入的包做报错
如果是 eval 的话 性能是最快的 但是针对一些复杂的代码，不擅长

development 环境下 `cheap-module-eval-source-map` 最快的
production 环境下 `cheap-module-source-map` 最快

# WebpackDevServer

`npm i webpack-dev-server`
