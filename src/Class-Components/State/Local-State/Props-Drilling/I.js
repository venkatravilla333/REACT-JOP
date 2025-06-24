import React from 'react'
import K from './K'

function I(props) {
  console.log(props)
  return (
    <div>
      <K x={ props.x} />
    </div>
  )
}

export default I