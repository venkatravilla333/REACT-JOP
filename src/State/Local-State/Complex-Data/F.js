import React, { useState } from 'react'
import axios from 'axios';

function F() {

  var [x, setX] = useState(1)

    var [loading, setLoading] = useState(false);
    var [data, setData] = useState([]);
    var [error, setError] = useState(null);
  
  function getData() {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      console.log(res.data);
      setLoading(false);
      setData(res.data);
    }).catch((err) => {
      setLoading(false)
      setError(err.message)
    })
  }


  var updateState = () => {
   setX(x+1)
  }

  // var data = 1

  // var updateData = () => {
  //   data++
  //   console.log(data)
  // }

  // console.log('render')
  return (
    <>
      {/* <h3>F: {data} </h3>
      <button onClick={updateData}>update data</button> */}
      <h3>F: {x} </h3>
      <button onClick={updateState}>update state</button>
      <button onClick={getData}>get data</button>
      {loading ? (
        <h3>Loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        data.map((obj) => {
          return (
            <div style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
              <h3>Title: {obj.title}</h3>
              <h3>Body: {obj.body}</h3>
            </div>
          );
        })
      )}
    </>
  )
}

export default F