import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import '@/assets/css/style.scss'
// 用render方法把自定义的App组件渲染到真实的DOM节点上
ReactDOM.render(<App />, document.getElementById('app'))


// 【以下代码，仅复习使用】

// import { fetchUserList } from '@/utils/api'
// import i1 from '@/assets/image/1.png'
// import '@/assets/css/style.scss'

/*eslint-disable*/
// console.log('hello webpack')
// console.log('abc')
/*eslint-enable*/

// document.getElementById('hello').style.color = 'red'
// document.getElementById('img').src = i1
// fetchUserList()
