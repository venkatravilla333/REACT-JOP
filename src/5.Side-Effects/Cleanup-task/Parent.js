import React, { useEffect, useState } from 'react'

function Parent() {
 var [X, setX] = useState(0)
  var [Y, setY] = useState(0)
  
  var updateState = (e) => {
    setX(e.clientX)
    setY(e.clientY)
    console.log('state update')
  }
  
  useEffect(() => {
    console.log('effect runs')
    window.addEventListener('click', updateState)
   return ()=> {
      window.removeEventListener('click', updateState)
      console.log('clean up task')
    }
  }, [])
  console.log('render')
  return (
    <div>
      <h3>X: {X}</h3>
      <h3>Y: {Y}</h3>
    </div>
  )
}

export default Parent