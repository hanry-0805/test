import React from 'react'
import { Child1 } from '@/components'

// 类组件
// 有state，有this，有生命周期等特性
// 和无状态组件（函数式组件）相比，性能相对较少

// state的特点：
// 特点1：单向绑定，当state数据发生变化时视图自动更新，视图变化state是不变的
// 特点2：单向数据流，数据只能向下传递，向子组件传递
// 特点3：不能直接修改state中的声明式变量，要使用 this.setState()来修改状态
// 特点4：this.setState()是异步的，但在定时器中时它又是同步的
// 特点5：多个this.setState()发生时，react会自动把它们合并成一个this.setState({})


export default class TestState extends React.Component {
  // 构造器函数，当前组件被实例化时会调用该方法
  constructor(props) {
    super(props) // super必须是构造器函数的第一行
    this.state = {
      msg: 'hello 2006',
      foo: '1',
      count: 0
    }
  }

  // 自定义方法
  changeMsg() {
    // this.setState({msg: 'hello 2007'})
    // this.setState({foo: '100'})

    this.setState({
      msg: 'hello 2007',
      foo: '100'
    }, ()=>{
      console.log('本次setState更新完成')
    })
  }

  add() {
    // this.setState({count: this.state.count+1})
    // this.setState(function(state, props){
    //   return {
    //     count: state.count+1
    //   }
    // })
    this.setState((state, props)=>({count:state.count+1}))
  }
  sub() {
    // this.setState({count: this.state.count-1})
    // this.setState(function(state, props){
    //   return {
    //     count: state.count-1
    //   }
    // })
    this.setState((state,props)=>({count:state.count-1}))
  }

  // 唯一的不能少的生命周期，否则报错
  render() {
    // 在return之前，你可以做任何的运算
    let { msg, count } = this.state

    return (
      <div>
        <h1>测试State</h1>
        <h1 onClick={this.changeMsg.bind(this)}>{msg}</h1>
        <Child1 msg={msg} />
        <hr/>
        <h1>{count}</h1>
        <button onClick={this.add.bind(this)}>加</button>
        <button onClick={this.sub.bind(this)}>减</button>

      </div>
    )
  }
}
