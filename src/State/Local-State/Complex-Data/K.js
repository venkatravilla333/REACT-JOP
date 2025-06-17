// import React, { useState } from 'react';
// import axios from 'axios';

// function K() {
//   var [x, setX] = useState(1); //sync data

//   var [loading, setLoading] = useState(false);
//   var [data, setData] = useState([]);
//   var [error, setError] = useState(null);

//   function getData() {
//     setLoading(true);
//     axios.get('https://jsonplaceholder.typicode.com/pos')
//       .then((res) => {
//       console.log(res.data);
//       setLoading(false);
//       setData(res.data);
//     }).catch((err) => {
//       setLoading(false)
//       setError(err.message)
//     })
//   }

//   var updateState = () => {
//     setX(x + 1);
//   };
//   console.log('render')
//   return (
//     <div>
//       <h3>K: {x} </h3>
//       <button onClick={updateState}>update state</button>
//       <button onClick={getData}>get data</button>
//       {loading ? (
//         <h3>Loading</h3>
//       ) : error ? (
//         <h3>{error}</h3>
//       ) : (
//         data.map((obj) => {
//           return (
//             <div style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
//               <h3>Title: {obj.title}</h3>
//               <h3>Body: {obj.body}</h3>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// }

// export default K;


import React, { useReducer } from 'react'

function K() {


  var initialState = {
    count: 0
  }

  var countReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'increase':
        return {
          count: state.count+ action.payload
        }
        break;
      case 'decrease':
        return {
          count: state.count - action.payload
        }
        break;
      default:
       return state
    }
  }

  var [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <h3>K: Count: {state.count}</h3>
      <button onClick={()=>dispatch({type: 'increase', payload: 100})}>increase</button>
      <button onClick={()=>dispatch({type: 'decrease', payload: 100})}>decrease</button>
    </div>
  )
}

export default K
