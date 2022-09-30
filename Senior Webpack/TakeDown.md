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
