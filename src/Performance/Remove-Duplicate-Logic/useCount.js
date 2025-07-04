import React, { useState } from 'react'

function useCount() {

  var [count, setCount] = useState(0)
  
  var increaseCount = () => {
    setCount(count+1)
  }
  return [count, increaseCount]
}

export default useCount