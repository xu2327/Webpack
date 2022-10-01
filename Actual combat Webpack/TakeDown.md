# library

可以用

```js
const TerserPlugin = require("terser-webpack-plugin");

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,//不将注释提取到单独的中
            }),
        ],
    }
```

# TypeScript

`npm i ts-loader typescript --save `

```ts
{
    "compilerOptions": {
        "outDir": "./dist",
        "module": "es6",
        "target": "es5",
        "allowJs": true
    }
}
```

`npm i @types/lodash --save`
