import React from 'react'

import { withRouter } from 'react-router-dom'

function Child1(props) {
  console.log('Child1 props', props)
  return(
    <div>
      <h3>{props.msg}</h3>
    </div>
  )
}

export default withRouter(Child1)
