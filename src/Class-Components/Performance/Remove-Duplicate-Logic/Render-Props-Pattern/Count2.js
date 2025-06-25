import React, { Component } from 'react'

class Count2 extends Component {
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
        <h3>Count2: {this.props.count}</h3>
        <button onMouseOver={this.props.updateCount}>increase</button>
      </div>
    )
  }
}

export default Count2