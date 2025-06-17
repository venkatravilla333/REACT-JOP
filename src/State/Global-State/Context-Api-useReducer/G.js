import React, { useContext } from 'react'
import { countContext } from './A'

function G() {
  var { state, dispatch1 } = useContext(countContext);
  return (
    <div>G: Hi {state.count}</div>
  )
}

export default G