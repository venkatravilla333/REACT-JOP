import React, { Component } from 'react'
import Hoc from './Hoc'

class Count1 extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      count: 0
  //   }
  // }

  // updateCount = () => {
  //   this.setState({
  //     count: this.state.count
  //   })
  // }
  render() {
    return (
      <div>
        <h3>Count1: {this.props.count}</h3>
        <button onClick={this.props.updateCount}>increase</button>
      </div>
    )
  }
}

export default Hoc(Count1)