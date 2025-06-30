import React, { Component } from 'react'

class Child extends React.PureComponent {
  render() {
    console.log('child render')
    return (
      <div>Child</div>
    )
  }
}

export default Child