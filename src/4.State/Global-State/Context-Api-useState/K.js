import React, { useContext } from 'react';
import { countContext } from './A';

function K() {
  // var count =  countContext._currentValue
  // var count = useContext(countContext)
  var { loading, data, error } = useContext(countContext);
  console.log(loading)
  console.log(data)
  console.log(error)

  return (
    <div>
      K
      {loading ? (
        <h3>Loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        data.map((obj) => {
          return <React.Fragment key={obj} >
            <h3>Titile: {obj.title}</h3>
            <h3>Body: {obj.body}</h3>
          </React.Fragment>;
        })
      )}
    </div>
  );
}

export default K;
