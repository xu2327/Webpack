/**
 * todo WebpackDevServer 路由 proxy代理
 */

// import React, { Component } from 'react'
// import ReactDom from 'react-dom'
// import axios from 'axios'

// class App extends Component {

//     // 当页面加载完之后，会走这个
//     componentDidMount() {
//         axios.get('/react/api/header.json')
//             .then((res) => {
//                 console.log(res)
//             })
//     }

//     render() {
//         return <div>hello world</div>
//     }
// }

// ReactDom.render(<App />, document.getElementById('root'))

/**
 * todo WebpackDevServer 单页面路由问题
 */

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDom from 'react-dom'
import Home from './home.js'
import List from './list.js'


class App extends Component {
    render() {
        return (
            < BrowserRouter >
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/list' component={List} />
                </div>
            </ BrowserRouter >
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))