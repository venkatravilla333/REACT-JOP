import React from 'react'
import F from './F'

function E(props) {
  console.log(props)
  return (
    <div>
      <F x={props.x} />
    </div>
  )
}

export default E