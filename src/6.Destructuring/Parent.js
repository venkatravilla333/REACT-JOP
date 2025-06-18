import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [person] = useState({ name: 'sachin', age: 40 })
  
  var {name, age} = person
  return (
    <div>
      {/* <h4>Parent : {person.name}, {person.age}</h4> */}
      <h4>Parent : {name}, {age}</h4>
      <Child person={person} />
    </div>
  )
}

export default Parent