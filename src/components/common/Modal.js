import React from 'react'

// 在任何一个React组件中，都有一个 this.props.children
// 它表示该组件内部包裹的其它所有子元素

export default function Modal(props) {
  return (
    <div className='qf-model'>
      <div className='header'>
        { props.tip }
        <span>X</span>
      </div>
      <div className='content'>
        { props.content }
      </div>
      <div className='footer'>
        { props.btns }
      </div>
    </div>
  )
}
