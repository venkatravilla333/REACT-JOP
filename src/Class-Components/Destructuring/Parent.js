import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  render() {
    var {count} = this.state
    return (
      <div>
        {/* <h4>Count: {this.state.count}</h4>
        <h4>Count: {this.state.count}</h4>
        <h4>Count: {this.state.count}</h4> */}
        <h4>Count: {count}</h4>
        <h4>Count: {count}</h4>
        <h4>Count: {count}</h4>
        <Child count= {count} />
      </div>
    )
  }
}

export default Parent