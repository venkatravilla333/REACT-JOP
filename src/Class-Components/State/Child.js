import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>Child: {this.props.count}</div>
    )
  }
}

export default Child