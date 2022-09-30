/**
 * todo 打包图片资源
 */
/*
    import MM from './MM.jpg'
    import style from './index.scss'
    import createMM from './createMM'
    createMM();
    var img = new Image()
    img.src = MM
    img.classList.add(style.MM)
    var root = document.getElementById('root')
    root.append(img)
*/

/**
 * todo: 打包字体资源
 */

// import './index.scss'
// var root = document.getElementById('root')
// root.innerHTML = '<div class="iconfont icon-shouji"></div>'


/**
 * todo 测试 Hot Module Replacement
 */
// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//     var div = document.createElement('div')
//     div.innerHTML = 'item'
//     document.body.appendChild(div)
// }

// import counter from './counter'
// import number from './number'

// counter()
// number()

// if (module.hot) {
//     module.hot.accept('./number', () => {
//         document.body.removeChild(document.getElementById('number'))
//         number()
//     })
// }

/**
 * todo Babel 处理 ES6
 */


// 使用 @babel/plugin-transform-runtime 之后就不引用下面的东西了
// import "@babel/polyfill"

// const arr = [
//     new Promise(() => { }),
//     new Promise(() => { }),
// ]

// arr.map(item => console.log(item))

/**
 * todo 打包 React 代码
 */

import "@babel/polyfill"

import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
    render() {
        return <div>hello world</div>
    }
}

ReactDom.render(<App />, document.getElementById('root'))

