import TodoStore from './modules/TodoStore'
import GoodStore from './modules/GoodStore'

// 根store
class Store {
  // 在构造器中，对所有子store进行初始实例化
  constructor() {
    this.todo = new TodoStore()
    this.good = new GoodStore()
  }
}

export default new Store()
