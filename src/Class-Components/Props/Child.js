import React, { Component } from 'react'

class Child extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <h3>Child Com: {this.props.age}</h3>
      </div>
    )
  }
}

export default Child