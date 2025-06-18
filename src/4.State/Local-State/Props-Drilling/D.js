import React, { useState } from 'react'

function D(props) {
  console.log(props)
  // var [x, setX] = useState(1)
  
  // var updateState = () => {
  //   setX(x+1)
  //  }
  return (
    <div>
       <h3>D: {props.x} </h3>
       <button onClick={props.updateState}>update state</button>
    </div>
  )
}

export default D