import React, { useState } from 'react'
import './condition.css'

function Conditional() {

  var [cssClassName, setCssClassName] = useState(true)

  var cssClass = cssClassName ? 'success' : 'error'

  return <>
    <h3 className={cssClass}>Sachin</h3>
    <button onClick={()=>setCssClassName(!cssClassName)}>set css class</button>
  </>
}

export default Conditional