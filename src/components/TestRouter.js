import React from 'react'

// 在React路由中，未被Route包裹的普通组件中，是没有路由API的
// 对那些没有被Route包裹的组件，要想使用路由API，该怎么办呢？——使用 withRouter 这个高阶组件来解决。

import { withRouter } from 'react-router-dom'

class TestRouter extends React.Component {
  render() {
    console.log('-------------', this.props)
    return (
      <div>
        <h2>我是一个没有被Route组件包裹过的普通组件</h2>
      </div>
    )
  }
}

// 高阶组件的作用，用于修饰、装饰一个React类，返回一个新的React类
export default withRouter(TestRouter)
