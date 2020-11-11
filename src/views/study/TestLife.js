import React from 'react'

// React生命周期，只有三个阶段

// 挂载：3
// 更新：2
// 卸载：1

export default class TestLife extends React.Component {
  // 挂载阶段：3

  // 构造器
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      num: 1
    }
    console.log('------- constructor')
    // 不要使用 this.setState()
    // 不要把 props数据赋值给state
    // super(props)必须是第一行代码
  }
  // 当DOM初始化渲染完成时
  componentDidMount() {
    console.log('------- componentDidMount')
    // 相当于是Vue中的mounted()
    // 调接口
    // 开启定时器、WebSocket长连接
  }
  // static getDerivedStateFromProps() {
  //   console.log('------- getDerivedStateFromProps')
  //   return null
  // }

  // 更新阶段：2

  // 【特殊】是一个开关，用于控制组件的更新
  // 它的返回值是一个布尔值，为假时组件将不再更新
  shouldComponentUpdate(state) {
    console.log('------- shouldComponentUpdate')
    return true
  }

  // 当state发生变化时，DOM更新完毕时执行
  componentDidUpdate() {
    console.log('------- componentDidUpdate')
    // 相当于是Vue中的updated()
    // 在这个方法执行之前，是发生了DOM更新的
    // 那么DOM是如何更新的呢？
    // 先进行Diff运算，找出VM变化的最小差异，然后再通过真实的DOM操作来更新DOM。
  }


  // 卸载阶段：1

  // 当组件销毁时执行
  componentWillUnmount() {
    console.log('------- componentWillUnmount')
    // 相当于是Vue中的beforeDestroy()
    // 清除长连接、定时器
  }

  changeCount() {
    this.setState({count: 100})
  }
  // 渲染函数
  render() {
    console.log('------- render')
    let { count } = this.state
    return(
      <div>
        <h1>测试生命周期</h1>
        <h3>{count}</h3>
        <button onClick={this.changeCount.bind(this)}>更新数据</button>
      </div>
    )
  }
}
