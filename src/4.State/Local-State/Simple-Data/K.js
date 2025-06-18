import React, { useState } from 'react';
import axios from 'axios';

function K() {
  var [x, setX] = useState(1); //sync data

  var [loading, setLoading] = useState(false);
  var [data, setData] = useState([]);
  var [error, setError] = useState(null);

  function getData() {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/pos')
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
    setX(x + 1);
  };
  console.log('render')
  return (
    <div>
      <h3>K: {x} </h3>
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
    </div>
  );
}

export default K;
