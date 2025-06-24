import React, { Component } from 'react'
import B from './B'
import C from './C'

export class A extends Component {

  constructor() {
    super()
    console.log(this)
    this.state = {
      count : 0
    }
    // this.updateCount  = this.updateCount.bind(this)
  }

  updateCount = ()=> {
    console.log(this)
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h3>Name: {this.state.count}</h3>
        <button onClick={this.updateCount}>update count</button>
        <B />
        <C/>
      </div>
    )
  }
}

export default A