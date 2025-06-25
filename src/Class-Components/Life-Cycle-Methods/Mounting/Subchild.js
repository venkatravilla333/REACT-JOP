import React, { Component } from 'react'

export class Subchild extends Component {
  
  constructor() {
    super()  
    this.state = {
      count : 0
    }
    console.log('subchild constructor')
  }

  static getDerivedStateFromProps(preProps, preState) {
    console.log('subchild static')
    return null
  }

  componentDidMount() {
    console.log('subchild didmount')
  }

  shouldComponentUpdate() {
    console.log('subchild shouldupdate ')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('subchild  sanpshot')
    return null
  }

  componentDidUpdate() {
    console.log('subchild  didupdate')
  }

  render() {
    console.log('subchild render')
    return (
      <div>
        <h3>Sub child</h3>
      </div>
    )
  }
}

export default Subchild