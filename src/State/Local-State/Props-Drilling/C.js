import React from 'react'
import G from './G'
import H from './H'

function C(props) {
  console.log(props)
  return (
    <div>
      <G />
      <H x={props.x} />
    </div>
  )
}

export default C