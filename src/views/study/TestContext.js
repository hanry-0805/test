import React from 'react'

import ThemeContext from '@/utils/ctx/theme'

// 上下文
// 作用：用于在React组件树中自上而下地传递数据
// 怎么使用？
// 1、使用 const AbcContext = React.createContext()创建React上下文对象（类）
// 2、在App中，用 <AbcContext.Provider value={}> 把根组件包裹起来
// 3、在组件中，使用 .contextType 来接收上下文，使用 this.context 访问上下文数据


// 【使用上下文数据的第一种写法】
// class TestContext extends React.Component {
//   render() {
//     console.log('theme ctx', this.context)
//     const theme = this.context
//     return (
//       <div style={{background: theme.background, color: theme.color}}>
//         <h1>测试上下文</h1>
//       </div>
//     )
//   }
// }
// 把上下文对象添加到当前的React类上，在当前类中使用 this.context 就可以访问传递下来的数据了
// TestContext.contextType = ThemeContext
// export default TestContext


// 【使用上下文数据的第二种写法】
export default class TestContext extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
      {
        (theme)=>(
          <div style={{background: theme.background, color: theme.color}}>
            <h1>测试上下文</h1>
          </div>
        )
      }
      </ThemeContext.Consumer>
    )
  }
}
