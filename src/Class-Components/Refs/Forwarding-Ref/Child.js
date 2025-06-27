
import React from 'react'

var Child = React.forwardRef((props,ref)=> {
  return (
    <input type="text" ref={ref}/>
  )
}) 

export default Child