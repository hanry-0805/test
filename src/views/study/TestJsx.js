import React from 'react'

// JSX = JavaScript XML 语法糖
// 你如何理解JSX？
// jsx是变量
// jsx是对象
// jsx可以嵌套
// JSX 防止注入攻击

// React元素
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
const element1 = <h1 className='greeting'>hello, world!</h1>

const eleChild = <div>
  <h3>child</h3>
</div>

const ele = (<div>
  <h1>hello world</h1>
  <h1>hello 2006</h1>
  { eleChild }
</div>)

const col = 'col'
const title = 'hello 2222'
const num = 200

function createDom(arg) {
  arg = arg || 0
  return (
    <div>
      <h2 className={col} title={title}>{num + arg}</h2>
    </div>
  )
}

// 无状态组件
export default function TestJsx() {
  const res = createDom()
  return (
    <div>
      { ele }
      {/* 这里是我的注释  */}
      <div>1111</div>
      { createDom(50) }
      { res }
      {element}
      {element1}
    </div>
  )
}
