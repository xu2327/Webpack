/**
 * todo: Trre Shaking 只支持 ES Module
 */
/*
import { add } from './math'

add(1, 1)
*/

/**
 * todo: Code Splitting
 */

/* import _ from 'lodash' */

// 第一种方式
// 首次访问页面时，加载 main.js (2mb)
// 打包文件会很大，加载时间会长
// 重新访问我们的页面，又要加载2mb的内容

// 业务逻辑 1mb
// console.log(_.join(['a', 'b', 'c'], '***'))
// 此处省略10万行业务逻辑
// console.log(_.join(['a', 'b', 'c'], '***'))

// 第二种方式
// main.js被拆成 lodash.js(1mb),main.js(1mb)
// 当页面逻辑发生变化是，只要加载main.js 即可(1mb)

// Code Splitting
// import _ from 'lodash'

// console.log(_.join(['a', 'b', 'c'], '***'))
// console.log(_.join(['a', 'b', 'c'], '***'))

// function getComponent() {
//     return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//         const element = document.createElement('div');
//         element.innerHTML = _.join(['xuwei', 'www'], '-');
//         return element;
//     })
// }

// getComponent().then((element) => {
//     document.body.appendChild(element);
// });

// import _ from 'lodash'

// const element = document.createElement('div');
// element.innerHTML = _.join(['xuwei', 'www'], '-');
// document.body.appendChild(element);

// import { add } from './math.js'
// add(1, 2)


/**
 * todo Lazy Loading 懒加载, Chunk
 */

// function getComponent() {
//     return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//         const element = document.createElement('div');
//         element.innerHTML = _.join(['xuwei', 'www'], '-');
//         return element;
//     })
// }

// async function getComponent() {
//     const { default: _ } = await import(/*webpackChunkName:"lodash"*/'lodash')
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['xuwei', 'www'], '-');
//     return element
// }


// document.addEventListener('click', () => {
//     getComponent().then((element) => {
//         document.body.appendChild(element);
//     });
// })

/**
 * todo Preloading Prefetching
 */



document.addEventListener('click', () => {
    import(/* webpackPrefetch: true */'./click.js').then(({ default: func }) => {
        func();
    })
})