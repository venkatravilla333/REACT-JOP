import React from 'react'

function Child({ person: {name, age} }) {
  // console.log(props)
  // var { person: {name, age} } = props
  
  return (
    // <div>Child: {props.person.name}, {props.person.age }</div>
    <div>Child: {name}, {age }</div>
  )
}

export default Child