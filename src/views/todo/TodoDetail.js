import React, { useState } from 'react'

// 在无状态组件中使用mobx
import { observer, inject } from 'mobx-react'

// 装饰器，只能修饰class类及其属性和方法

// 用function关键字定义无状态组件
// function TodoDetail(props) {
//   let { todo } = props.store
//   let [msg, setMsg] = useState('hello hooks')
//   return(
//     <div>
//       <h1>Todo详情</h1>
//       <h2>当前总共有 <span>{todo.list.length}</span> 条任务</h2>
//     </div>
//   )
// }

// 用箭头函数定义无状态组件
// const TodoDetail = (props)=>{
//   let { todo } = props.store
//   let [msg, setMsg] = useState('hello hooks')
//   return(
//     <div>
//       <h1>Todo详情</h1>
//       <h2>当前总共有 <span>{todo.list.length}</span> 条任务</h2>
//     </div>
//   )
// }

// export default inject('store')(observer(TodoDetail))


// 一步到位的终极写法
export default inject('store')(observer((props)=>{
  let { todo } = props.store
  let [msg, setMsg] = useState('hello hooks')
  return(
    <div>
      <h1>Todo详情</h1>
      <h2>当前总共有 <span>{todo.list.length}</span> 条任务</h2>
    </div>
  )
}))
