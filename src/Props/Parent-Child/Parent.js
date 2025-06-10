import React from 'react'
import Child from './Child'

function Parent() {

  var x = 100

  return (
    <div>
      <h5>Parent</h5>
      <Child x = {x}  />
    </div>
  )
}

export default Parent