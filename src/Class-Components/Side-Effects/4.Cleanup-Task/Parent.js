import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      X: 0,
      Y: 0
    }
  }

  updateState = (e) => {
    console.log('state update')
    this.setState({
      X: e.clientX,
      Y: e.clientY,
    })
  }

  componentDidMount() {
    console.log('did mount')
    window.addEventListener('click', this.updateState)
  }

  componentWillUnmount() {
    console.log('cleanup task')
    window.removeEventListener('click', this.updateState)
  }

  render() {
    console.log('render')
    return (
      <div>
        <h3>X: {this.state.X }</h3>
        <h3>Y: {this.state.Y }</h3>
      </div>
    )
  }
}

export default Parent