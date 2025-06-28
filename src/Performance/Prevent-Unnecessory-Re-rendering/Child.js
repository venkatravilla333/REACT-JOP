import React from 'react'

function Child() {

  console.log('child render')
  return (
    <h4>Child</h4>
  )
}

export default React.memo(Child)