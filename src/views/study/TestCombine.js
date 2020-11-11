import React from 'react'

import { Modal } from '@/components'


function InfoContent(props) {
  return (
    <h4>恭喜你申请会员成功。</h4>
  )
}
function InfoBtns(props) {
  return (
    <div>
      <span className='confirm'>确定</span>
      <span className='cancel'>取消</span>
    </div>
  )
}


function UserContent(props) {
  return (
    <div>
      <span>用户名：</span>
      <input type="text"/>
    </div>
  )
}
function UserBtns(props) {
  return (
    <div>
      <span className='del'>删除</span>
      <span className='cancel'>取消</span>
      <span className='confirm'>OK</span>
    </div>
  )
}

export default class TestCombine extends React.Component {
  render() {
    return (
      <div>
        <h1>测试组合</h1>

        { this.props.children }

        <Modal
          tip={<span>温馨提示</span>}
          btns={<InfoBtns />}
          content={<InfoContent />}
        />

        <Modal
          tip={<span>警告</span>}
          btns={<UserBtns />}
          content={<UserContent />}
        />

      </div>
    )
  }
}
