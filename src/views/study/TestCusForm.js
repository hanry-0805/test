import React from 'react'

import { Radio, Checkbox } from '@/components'

// 在React中，父组件向子组件传值用自定义属性，子组件向父组件传值用自定义事件

export default class TestCusForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      levelArr: [
        { id: 1, title: '高中' },
        { id: 2, title: '大专' },
        { id: 3, title: '本科' },
        { id: 4, title: '硕士' },
        { id: 5, title: '博士' }
      ],
      level: 2,
      sportArr: [
        { id: 1, title: '足球' },
        { id: 2, title: '篮球' },
        { id: 3, title: '羽毛球' },
        { id: 4, title: '橄榄球' },
        { id: 5, title: '高尔夫球' },
        { id: 6, title: '乒乓球' },
        { id: 7, title: '网球' }
      ],
      sport: [1,2,3]
    }
  }
  // 父组件中Radio组件的change
  radioChange(val) {
    console.log('父Radio', val)
    this.setState({level: parseInt(val)})
  }
  // 父组件中Checkbox组件的change
  checkboxChange(arr) {
    console.log('arr', arr)
    this.setState({sport: arr})
  }
  render() {
    let { levelArr, level, sportArr, sport } = this.state
    return (
      <div>
        <h1>测试自定义组件</h1>

        <Radio
          data={levelArr}
          label='title'
          value={level}
          onChange={this.radioChange.bind(this)}
        />

        <hr/>

        <Checkbox
          data={sportArr}
          label='title'
          value={sport}
          onChange={this.checkboxChange.bind(this)}
        />
      </div>
    )
  }
}
