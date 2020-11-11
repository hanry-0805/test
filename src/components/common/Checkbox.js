import React from 'react'

export default class Checkbox extends React.Component {
  change(e) {
    let { value } = this.props
    // e.target.checked = true 表示“勾选”，反之就是“取消”
    console.log('checkbox', e.target.checked, e.target.value)
    // 要通过自定义事件，把最终选择的结果（数组）传递给父组件
    if (e.target.checked) {
      value.push(parseInt(e.target.value))
    } else {
      // value = value.filter(ele => ele !== parseInt(e.target.value))
      let idx = value.findIndex(ele=>ele===parseInt(e.target.value))
      value.splice(idx, 1)
      console.log('idx', idx)
    }
    this.props.onChange([...new Set(value)]) // 去重
  }
  render() {
    let { data, value, label } = this.props
    console.log('checkbox value', value)  // [1,2,3]

    data.map((ele,idx)=>{
      // 给数组中每个元素添加自定义属性bol，表示是否被选中
      data[idx].bol = value.includes(ele.id)
    })

    return (
      <div>
        {
          data.map(ele=>(
            <span key={ele.id}>
              <input
                type="checkbox"
                checked={ele.bol}
                value={ele.id}
                onChange={this.change.bind(this)}
              />
              <span>{ele[label]}</span>
            </span>
          ))
        }
      </div>
    )
  }
}
