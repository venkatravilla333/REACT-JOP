import React, { useState } from 'react'

function K() {
  // var [x, setX] = useState(1)
  
  // var updateState = () => {
  //   setX(x+1)
  //  }
  return (
    <div>
       <h3>K: {x} </h3>
       <button onClick={updateState}>update state</button>
    </div>
  )
}

export default K