import React from 'react'

function Child(props) {
  if (props.age < 18) {
    throw new Error('age must be 18 or more')
  }
  return (
    <div>Child {props.age}</div>
  )
}

export default Child