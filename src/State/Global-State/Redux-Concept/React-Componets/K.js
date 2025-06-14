import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Redux/store'
// import { store } from '../Redux/store'

function K() {
  // var count = store.getState()

  var count = useSelector((state) => {
    return state.count
  })

  var dispatch = useDispatch() 
  
  return (
    <div>
      <h2>K : {count}</h2>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(decrease())}>decrease</button>
    
      {/* <button>decrease</button> */}
    </div>
  )
}

export default K