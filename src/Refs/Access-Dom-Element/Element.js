import React, { useEffect, useRef, useState } from 'react'

function Element() {
  console.log('render')

  var inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  var getValue = () => {
   console.log(inputRef.current.value)
    alert(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Element