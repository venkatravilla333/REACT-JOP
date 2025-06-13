import React, { useState } from 'react'

function F() {

  var [x, setX] = useState(1)

  var updateState = () => {
   setX(x+1)
  }

  // var data = 1

  // var updateData = () => {
  //   data++
  //   console.log(data)
  // }

  console.log('render')
  return (
    <>
      {/* <h3>F: {data} </h3>
      <button onClick={updateData}>update data</button> */}
      <h3>F: {x} </h3>
      <button onClick={updateState}>update state</button>
    </>
  )
}

export default F