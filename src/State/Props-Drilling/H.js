import React from 'react'
import I from './I'
import J from './J'

function H(props) {
  console.log(props)
  return (
    <div>
      <I x = {props.x} />
      <J />
    </div>
  )
}

export default H