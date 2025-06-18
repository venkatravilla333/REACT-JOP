import React from 'react'

function Child(props) {
  // console.log(props)
  return (
    <div>
      <button onClick={()=>props.test('sachin')}>child btn</button>
    </div>
  )
}

export default Child