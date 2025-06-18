import React, { useReducer } from 'react';
import B from './B';
import C from './C';
import axios from 'axios'

export var countContext = React.createContext();
export var postsContext = React.createContext();

function A() {
  var countinitialState = {
    count: 0,
  };

  var countReducer = (state = countinitialState, action) => {
    switch (action.type) {
      case 'increase':
        return {
          count: state.count + 1,
        };
        break;
      case 'decrease':
        return {
          count: state.count - 1,
        };
        break;
      default:
        return state;
    }
  };

  var postsinitialState = {
    loading: false,
    posts: [],
    error: null,
  };

  var postsReducer = (state = postsinitialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
        break;
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload,
        };
        break;
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        break;
      default:
        return state
    }
  };

  var getData = () => {
    dispatch2({type: 'FETCH_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        dispatch2({type: 'FETCH_POSTS_SUCCESS', payload: res.data})
      }).catch((err) => {
      dispatch2({type: 'FETCH_POSTS_FAILURE', payload: err.message})
      
    })
  }

  var [state, dispatch1] = useReducer(countReducer, countinitialState);
  var [apiData, dispatch2] = useReducer(postsReducer, postsinitialState);

  return (
    <div>
      <button onClick={getData}>get data</button>
      <postsContext.Provider value={{ apiData}}>
        <countContext.Provider value={{ state, dispatch1 }}>
          <B />
          <C />
        </countContext.Provider>
      </postsContext.Provider>
    </div>
  );
}

export default A;
