import React, { Component } from 'react'
import Subchild from './Subchild'


export class Child extends Component {
  
  constructor() {
    super()  
    this.state = {
      count : 0
    }
    console.log('child constructor')
  }

  static getDerivedStateFromProps(preProps, preState) {
    console.log('child static')
    return null
  }

  componentDidMount() {
    console.log('child didmount')
  }

  
  shouldComponentUpdate() {
    console.log('child shouldupdate ')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('child sanpshot')
    return null
  }

  componentDidUpdate() {
    console.log('child didupdate')
  }

  render() {
    console.log('child render')
    return (
      <div>
        <Subchild/>
      </div>
    )
  }
}

export default Child