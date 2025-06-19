import React, { useState } from 'react'

function Controlled() {
  var [name, setName] = useState('')
  console.log(name)
  return (
    <div>
      <h4>Name: {name}</h4>
      <form>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </form>
    </div>
  )
}

export default Controlled