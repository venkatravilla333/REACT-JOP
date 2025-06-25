import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  
  constructor() {
    super()  
    this.state = {
      count : 0
    }
    console.log('parent constructor')
  }

  static getDerivedStateFromProps(preProps, preState) {
    console.log('parent static')
    return null
  }

  componentDidMount() {
    console.log('parent didmount')
  }

  shouldComponentUpdate() {
    console.log('parent shouldupdate ')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('parent sanpshot')
    return null
  }

  componentDidUpdate() {
    console.log('parent didupdate')
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.updateCount}>increase count</button>
        <Child/>
      </div>
    )
  }
}

export default Parent