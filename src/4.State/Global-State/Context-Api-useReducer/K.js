import React, { useContext } from 'react';
import { countContext, postsContext } from './A';
// import { countContext } from '../Context-Api-useState/A'

function K() {
  var { state, dispatch1 } = useContext(countContext);
  var { apiData} = useContext(postsContext);
  return (
    <div>
      <h3>Count new: {state.count}</h3>
      <button onClick={() => dispatch1({ type: 'increase' })}>increase</button>
      <button onClick={() => dispatch1({ type: 'decrease' })}>decrease</button>
      <h3>Posts</h3>
      {apiData.loading ? (
        <h3>Loading</h3>
      ) : apiData.error ? (
        <h3>{apiData.error}</h3>
      ) : (
        apiData.posts.map((obj) => {
          return (
            <React.Fragment>
              <h3>Title: {obj.title}</h3>
              <h3>Title: {obj.body}</h3>
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}

export default K;
