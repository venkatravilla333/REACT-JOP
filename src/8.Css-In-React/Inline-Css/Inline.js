import React from 'react'

function Inline() {
  var obj = {color: 'red'}
  return (
    <div>
      <h1 style={obj}>Sachin</h1>
      <h1 style={{color: 'blue'}}>Kohli</h1>
    </div>
  )
}

export default Inline