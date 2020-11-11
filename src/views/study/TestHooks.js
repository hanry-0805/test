import React, { useState, useEffect } from 'react'

// 有些React项目中只有 hooks+函数式组件
// 有些React项目，有类组件，也有函数式组件
// 有些React项目，只有类组件，没有函数式组件

// Hooks（只适用于函数式组件）
// 实际上就是一套API，它可以让无状态组件（函数式组件）拥有像类组件一样的特性
// 这些特性：state、生命周期、上下文、ref等

export default function TestHooks(props) {

  // useState的语法
  const [count, setCount] = useState(100)
  const [bol, setBol] = useState(true)
  const [list, setList] = useState([])
  let timer = null

  function changeCount() {
    setCount(count+1)
  }

  // useEffect(fn, [])
  useEffect(()=>{
    // 相当于 componentDidMount() 的功能
    // 在这里可以调接口、开定时器、开长连接
    timer = setInterval(()=>{
      console.log(1)
    }, 1000)
    return ()=>{
      // 相当于 componentWillUnmount() 的功能
      // 在这里关闭定时器、关闭长连接
      clearInterval(timer)
    }
  }, [count])
  // [count] 相当于 componentDidUpdate() 的功能

  useEffect(()=>{
    // 相当于是Vue中mounted()
    setList([1,2,3,4])
    // return undefined
  },[])

  useEffect(()=>{
    document.title = '2006'
    // return undefined
  })

  function createList() {
    return list.map(ele=>(
      <div key={ele}>{ele}</div>
    ))
  }

  return (
    <div>
      <h1>测试hooks</h1>
      <h3>{count}</h3>
      <button onClick={changeCount}>增加</button>
      <hr/>
      {
        createList()
      }
    </div>
  )
}
