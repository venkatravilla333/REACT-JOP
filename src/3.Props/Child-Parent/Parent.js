import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  // var data = 10
  var [data, setData] = useState(10)
  console.log(data)
  console.log(setData)
  
  function test(x) {
    // console.log(x)
    // data = x
    setData(x)
    console.log(data)
  }
  console.log('render')
  return (
    <div>
      <h4>Parent: {data}</h4>
      <Child test = {test}/>
    </div>
  )
}

export default Parent