import React from 'react'

// 高阶组件（高阶函数），用于修饰React类
import roleHoc from '@/utils/hoc/roleHoc'

@roleHoc
class TestHoc extends React.Component {
  render() {
    let { role } = this.props
    return (
      <React.Fragment>
        <div>
          <h1>测试高阶组件</h1>
          <h1>{this.props.role}</h1>
          <h1>{this.props.roleHandle()}</h1>
          { role === 1 && <button>只有角色=1的人才看得见</button> }
        </div>
        <h3>兄弟React元素</h3>
      </React.Fragment>

    )
  }
}

// 修饰、装饰
export default TestHoc
