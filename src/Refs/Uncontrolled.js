import React, { useEffect, useRef } from 'react'

function Uncontrolled() {

  var inputRef = useRef()
  
  var getValue = () => {
   console.log(inputRef.current.value)
  }

  
  return (
    <div>
      <form>
        <input type="text" ref={inputRef} />
        <button onClick={getValue}>get value</button>
      </form>
    </div>
  )
}

export default Uncontrolled