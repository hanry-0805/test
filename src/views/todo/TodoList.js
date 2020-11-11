import React from 'react'

// 使用antd组件
import { Button } from 'antd'

// 在类组件中使用mobx
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }
  // 实现TODOLIST功能
  taskChange(e) {
    this.setState({task: e.target.value})
  }
  // 添加task
  confirm(e) {
    let { todo } = this.props.store
    if(e.keyCode === 13) {
      // 向mobx传递数据
      todo.addTodo(this.state.task)
      // 清空表单
      this.setState({task: ''})
    }
  }
  // 删除task
  remove(idx) {
    let { todo } = this.props.store
    todo.delTodo(idx)
  }
  skipToDetail(ele) {
    let { history } = this.props
    history.push('/todo/detail/'+ele.id)
  }
  render() {
    let { task } = this.state
    let { todo } = this.props.store
    return (
      <div>
        {/* Todo List */}
        <input type="text"
          value={task}
          onChange={this.taskChange.bind(this)}
          onKeyUp={this.confirm.bind(this)}
        />
        <div>
          {
            todo.list.map((ele, idx)=>(
              <div key={ele.id}>
                <span>{ele.id}</span>
                <span>-----</span>
                <span onClick={this.skipToDetail.bind(this, ele)}>{ele.task}</span>
                <span>-----</span>
                <span onClick={this.remove.bind(this, idx)}>删除</span>
              </div>
            ))
          }
        </div>
        <hr/>

        <Button type='primary'>我的按钮</Button>
      </div>
    )
  }
}

// export default inject('store')(observer(TodoList))
export default TodoList


// 一步到位的终极写法
// export default inject('store')(observer(class TodoList extends React.Component {}))
