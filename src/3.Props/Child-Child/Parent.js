import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  var [data, setData] = useState('sachin')
  
  function test(x) {
    setData(x)
  }
  return (
    <div>
      <Child1 test= {test} />
      <Child2 data={data} />
    </div>
  )
}

export default Parent