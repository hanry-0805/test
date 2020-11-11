import React from 'react'

// 高阶组件、高阶函数（纯函数）
// 作用：实现组件业务逻辑的复用
// 比如当多个组件有相同的某些业务功能时，可以对这些重复的业务进行封装

// 特点：入参是一个React类，返回值是一新的React类
// 高阶组件是一种开发经验、设计模式

// 高阶组件，也叫容器组件
// WrappedComponent，一般叫称呼叫UI组件

export default function roleHoc(WrappedComponent) {
  // 返回值是一个新的React类（组件）
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: -1
      }
    }
    componentDidMount() {
      this.setState({
        role: 1
      })
    }
    roleHandle() {
      let res = ''
      switch (this.state.role) {
        case 1:
          res = 'CEO'
          break
        case 2:
          res = '总监'
          break
        case 3:
          res = '经理'
          break
        default:
          res = '普通员工'
      }
      return res
    }
    render() {
      return (
        <div>
          <h3>这是复用的菱形</h3>
          <WrappedComponent
            role={this.state.role}
            roleHandle={this.roleHandle.bind(this)}
          />
        </div>
      )
    }
  }
}
