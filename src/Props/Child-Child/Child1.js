import React from 'react'

function Child1(props) {
  return (
    <div>
      <button onClick={()=>props.test(100)}>Child1 button</button>
    </div>
  )
}

export default Child1