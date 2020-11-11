import React, { Component } from 'react'

// 事件绑定
// 1、所有事件要以on开头，比如绑定单击事件用‘onClick’，绑定键盘事件用'onKeyUp'
// 2、两种绑定方式，ES5的方式要使用.bind(this)来改变指向，还可以使用ES6的方式绑定事件
// 3、如何获取事件对象？



export default class TestEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
    this.clickHandle = this.clickHandle1.bind(this, '2', false)
  }

  // 用于ES5的方式绑定事件
  // 最后一个参数永远都是事件对象
  clickHandle1(arg1, arg2, e) {
    // 阻止默认事件
    e.preventDefault()
    // 阻止冒泡
    e.stopPropagation()
    console.log('click', this, arg1, arg2, e)
    this.setState({ num: 100 })
  }

  // 用于ES6的方式绑定事件
  // 要想拿到事件对象，必须在使用箭头函数进行传递
  clickHandle2(arg4, e, arg3) {
    // 阻止默认事件
    e.preventDefault()
    // 阻止冒泡
    e.stopPropagation()
    console.log('click', this, arg4, e, arg3)
    this.setState({ num: 100 })
  }

  // 键盘事件，绑定enter事件
  enterHandle(e) {
    if(e.keyCode===13) {
      console.log('提交数据')
    }
  }

  render() {
    let { num } = this.state
    return (
      <div>
        <h1>测试事件</h1>
        <h1>{num}</h1>
        <button onClick={this.clickHandle1.bind(this, '1', true)}>点击一</button>
        <button onClick={this.clickHandle}>点击二</button>
        <button onClick={(e)=>this.clickHandle2('4', e, '3')}>点击三</button>
        <hr/>
        <input type="text" onKeyUp={this.enterHandle.bind(this)} />
      </div>
    )
  }
}
