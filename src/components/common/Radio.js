import React from 'react'

export default class Radio extends React.Component {
  // 子组件发生change时
  change(e) {
    // console.log('子组件radio', e)
    console.log(e.target.checked, e.target.value)
    // 使用自定义事件，向父组件传值
    this.props.onChange(e.target.value)
  }
  render() {
    // console.log('radio', this.props.data)
    let { data, value, label } = this.props
    return (
      <div>
        {
          data.map(ele=>(
            <span key={ele.id}>
              {/*checked属性，用于控制表单的选中状态*/}
              {/*当表单change时，在e.target.value中取值*/}
              <input
                type="radio"
                checked={ele.id===value}
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
