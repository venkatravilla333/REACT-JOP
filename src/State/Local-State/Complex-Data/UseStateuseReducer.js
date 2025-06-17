
import axios from 'axios'

// function UseStateuseReducer() {
//   var [loading, setLoading] = useState(false);
//   var [posts, setPosts] = useState([]);
//   var [error, setError] = useState(null);

//   var getData = () => {
//     setLoading(true)
//     axios.get('https://jsonplaceholder.typicode.com/post')
//       .then((res) => {
//         setLoading(false)
//         setPosts(res.data)
//       }).catch((err) => {
//         setLoading(false)
//         setError(err.message)
//     })
//   }

//   console.log('render')
//   return (
//     <div>
//       <button onClick={getData}>get data</button>
//       {loading ? (
//         <h3>Loading</h3>
//       ) : error ? (
//         <h3>{error}</h3>
//       ) : (
//         posts.map((obj) => {
//           return <React.Fragment>
//             <h3>{obj.title}</h3>
//             <h3>{obj.body}</h3>
//           </React.Fragment>;
//         })
//       )}
//     </div>
//   );
// }

// export default UseStateuseReducer;

import React, { useReducer } from 'react'

function UseStateuseReducer() {

  var initialState = {
    loading: false,
    posts: [],
    error: null
  }

  var postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          loading: true
        }
      break;
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
        }
      break;
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
        break;
      default:
        return state

    }
    
  }

  var [apiData, dispatch] = useReducer(postsReducer, initialState)
  
  var getData = () => {
    dispatch({type: 'FETCH_POSTS_REQUEST' })
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        dispatch({type: 'FETCH_POSTS_SUCCESS', payload: res.data })
      }).catch((err) => {
        dispatch({type: 'FETCH_POSTS_ERROR', payload: err.message })
      })
  }
  return (
    <div>
      <button onClick={getData}>getData</button>
      {
        apiData.loading ? <h3>Loading</h3> : apiData.error ? <h3>{apiData.error}</h3> :
          apiData.posts.map((obj) => {
            return <React.Fragment>
              <h3>Title: {obj.title }</h3>
              <h3>Body: {obj.body }</h3>
            </React.Fragment>
          })
      }
    </div>
  )
}

export default UseStateuseReducer
