import React, { Component } from 'react'

class Child extends Component {
  render() {
    var {count} = this.props
    return (
      // <div>Child: {this.props.count }</div>
      <div>Child: {count }</div>
    )
  }
}

export default Child