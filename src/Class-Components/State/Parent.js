import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.updateCount}>update count</button>
        <Child count={this.state.count} />
      </div>
    )
  }
}

export default Parent