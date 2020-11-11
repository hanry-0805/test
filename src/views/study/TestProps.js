import React from 'react'

// 无状态组件（函数式组件）
// 就是没有state的React组件，也没有生命周期等特性，也没有this
// 优势：渲染性能高、速度快

// props
// 这是父子组件之间通信的唯一纽带
// props是只读的，不建议直接修改

export default function TestProps(props) {
  return (
    <div>
      <h1 onClick={props.click}>测试Props</h1>
      { props.msg }
    </div>
  )
}
