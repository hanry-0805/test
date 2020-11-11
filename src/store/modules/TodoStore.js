
import {
  makeObservable,
  observable,
  action,
  makeAutoObservable
} from 'mobx'

// observable 可观察的，用于定义可被组件共享的数据，相当于是Vuex中state
// action 相当于是Vuex中的 mutations+actions，用于改变observable

// [mobx 5]写法
// export default class TodoStore {
//   @observable list = [
//     { id: 1, task: '跑步' },
//     { id: 2, task: '睡觉' }
//   ]
//   @action addTodo(payload) {
//     this.list.push({
//       id: Date.now(),
//       task: payload
//     })
//   }
// }


// [mobx 6]写法
export default class TodoStore {
  constructor() {
    makeObservable(this, {
      list: observable,
      msg: observable,
      addTodo: action,
      delTodo: action
    })
  }
  list = []
  msg = 'hello mobx6'

  addTodo(payload) {
    this.list.push({
      id: Date.now(),
      task: payload
    })
  }
  handle() {
    console.log('数据处理')
  }
  delTodo(payload) {
    this.handle()
    this.list.splice(payload, 1)
  }
}


// export default class TodoStore {
//   constructor() {
//     makeAutoObservable(this)
//   }
//   msg = 'hello mobx6'
//   handle() {
//     console.log('数据处理')
//   }
//   changeMsg(payload) {
//     this.handle()
//     this.msg = payload
//   }
// }
