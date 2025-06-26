import React, { Component } from 'react'
import Child from './Child'
import ErrorBoundry from './ErrorBoundry'

export class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
        <Child age={30} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Child age={15} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Child age={20} />
        </ErrorBoundry>
      </div>
    )
  }
}

export default Parent