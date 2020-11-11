import React from 'react'
import PropTypes from 'prop-types'

// 无状态组件
// 函数式组件（纯函数）
// PureComponent

function Child2(props) {
  function click() {
    console.log('Child2 clicked')
    props.onCount(200)
  }
  return(
    <div>
      <h3>{props.count}</h3>
      <button onClick={click}>改变Count</button>
    </div>
  )
}

// 使用 prop-types 这个库来实现组件自定义属性的数据类型检查
// cnpm install prop-types -S

// 相当于是Vue中 props选项
// 一般来说在做类型检查时，一是检查数据类型，二是检查必填与非必填
Child2.propTypes = {
  count: PropTypes.number,
  msg: PropTypes.string.isRequired,
  onCount: PropTypes.func,
  title: PropTypes.element
}

export default Child2
