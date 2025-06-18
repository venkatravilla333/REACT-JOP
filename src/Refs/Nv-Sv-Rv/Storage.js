import React, { useRef, useState } from 'react'

function Storage() {

  var nv = 0 

  var [sv, setSv] = useState(0)
  
  var rv = useRef(0)
  console.log(rv)

  var updateNv = () => {
    nv++
    console.log(nv)
  }
  var updateSv = () => {
    setSv(sv+1)
    console.log(sv)
  }
  var updateRv = () => {
    rv.current++
    console.log(rv)
  }
  console.log('render')

  return (
    <div>
      <h2>Nv: {nv}</h2>
      <button onClick={updateNv}>updateNv</button>
      <h2>Sv: {sv}</h2>
      <button onClick={updateSv}>updateSv</button>
      <h2>Rv: {rv.current}</h2>
      <button onClick={updateRv}>updateRv</button>
    </div>
  )
}

export default Storage