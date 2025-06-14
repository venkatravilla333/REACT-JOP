import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'


export var countContext = React.createContext(0)
  console.log(countContext._currentValue)
  console.log(countContext)

function A() {
  var [count, setCount] = useState(1)

  var [loading, setLoading] = useState(false)
  var [data, setData] = useState([])
  var [error, setError] = useState(null)

  function getData() {
    console.log('hello')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setLoading(false)  
        console.log(res.data)
        setData(res.data)
      }).catch((err) => {
        setLoading(false)
        setError(err.message)
    })
  
}

  var updateState = () => {
    setCount(count+1)
  }
  
  return (
    <div>
      <button onClick={updateState}>update state</button>
      <button onClick={getData}>get data</button>

      <countContext.Provider value  = {{loading, data, error}}  >
      <B />
      <C />
      </countContext.Provider>
    </div>
  )
}

export default A