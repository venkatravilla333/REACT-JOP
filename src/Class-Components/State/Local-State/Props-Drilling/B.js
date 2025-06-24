import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  console.log(props)
  return (
    <div>
      <D x={props.x} updateState = {props.updateState} />
      <E x={props.x} />
    </div>
  )
}

export default B