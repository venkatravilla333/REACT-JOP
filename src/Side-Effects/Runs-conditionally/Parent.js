import React, { useEffect, useState } from 'react'

function Parent() {

 var [normalVal, setNormalVal] = useState(0)
 var [domVal, setDomVal] = useState(0)

  useEffect(() => {
    console.log('effect runs')
    document.title = domVal
  }, [domVal])

  var updateNormalValue = () => {
    setNormalVal(normalVal + 1)
    console.log('state normal value update')
  }
  var updateDomValue = () => {
    setDomVal(domVal + 1)
    console.log('state dom value update')
  }
  console.log('render')
  return (
    <div>
      <h3>Normal value: {normalVal}</h3>
      <button onClick={updateNormalValue}>update normal value</button>
      <h3>Dom value: {domVal}</h3>
      <button onClick={updateDomValue}>update Dom value</button>
    </div>
  )
}

export default Parent