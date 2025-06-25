import React, { Component } from 'react'

class Count3 extends Component {
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
        <h3>Count3: {this.props.count}</h3>
        <button onDoubleClick={this.props.updateCount}>increase</button>
      </div>
    )
  }
}

export default Count3