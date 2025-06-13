import React from 'react'
import B from './B'
import C from './C'

function A() {
   var [x, setX] = useState(1)
  
  var updateState = () => {
    setX(x+1)
   }
  return (
    <div>
      <B />
      <C />
    </div>
  )
}

export default A