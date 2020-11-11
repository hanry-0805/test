import loadable from '@loadable/component'

// @loadable/component 作用是代码分割
// @babel/plugin-syntax-dynamic-import 作用是支持 ()=>import() 这种语法
// 当前环境默认是使用ESlint来检测代码的，但是它检测不了 ()=>import()，那怎么办呢？
// 要安装 babel-eslint 这个解析器来解析 ()=>import() 这种语法


const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestProps = loadable(()=>import('./study/TestProps'))

const MusicList = loadable(()=>import('./music/MusicList'))
const MusicDetail = loadable(()=>import('./music/MusicDetail'))

const TodoList = loadable(()=>import('./todo/TodoList'))
const TodoDetail = loadable(()=>import('./todo/TodoDetail'))

import TestState from './study/TestState'
import TestEvent from './study/TestEvent'
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestCusForm from './study/TestCusForm'
import TestLife from './study/TestLife'
import TestCombine from './study/TestCombine'
import TestLift from './study/TestLift'
import TestContext from './study/TestContext'
import TestHoc from './study/TestHoc'
import TestHooks from './study/TestHooks'

const routes = [
  {
    id: 13,
    path: '/todo',
    component: TodoList,
    text: 'TodoList',
    children: [
      {
        id: 1301,
        path: '/todo/detail/:id',
        component: TodoDetail,
        text: 'Todo详情'
      }
    ]
  },
  {
    id: 10,
    path: '/',
    component: MusicList,
    text: '音乐列表',
    children: [
      {
        id: 1001,
        // 动态路由
        // 在详情页中，使用 this.props.match.params 来接收动态参数
        path: '/music/detail/:id/:name',
        component: MusicDetail,
        text: '音乐详情'
      }
    ]
  },
  {
    id: 11,
    path: '/jsx',
    component: TestJsx,
    text: '测试JSX'
  },
  {
    id: 12,
    path: '/props',
    component: TestProps,
    text: '测试Props'
  }
]

export default routes
