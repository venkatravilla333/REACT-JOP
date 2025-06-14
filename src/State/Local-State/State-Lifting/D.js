import React, { useState } from 'react'

function D() {
  // var [x, setX] = useState(1)
  
  // var updateState = () => {
  //   setX(x+1)
  //  }
  return (
    <div>
       <h3>D: {x} </h3>
       <button onClick={updateState}>update state</button>
    </div>
  )
}

export default D