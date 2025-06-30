import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0,
      nums: [1, 2, 3],
      address: {road: 101}
    }
  }

  updateCount = () => {
    this.setState({
      count: 0
    })
  }

  updateReference = () => {
    // var nums = this.state.nums
    // var address = this.state.address

    // nums.push(4)
    // address.road = 201

    // this.setState({
    //   nums,
    //   address
    // })

    var newNums = [...this.state.nums, 4]
    var newAddress = { ...this.state.address, road: 201 }

     this.setState({
     nums: newNums,
     address: newAddress
    })

  }
  render() {
    console.log('parent render')
    return (
      <div>
        {/* <h4>Count: {this.state.count}</h4> */}
        {/* <button onClick={this.updateCount}>update count</button> */}
        <button onClick={this.updateReference}>update reference</button>
        {/* <Child count={this.state.count} /> */}
        <Child nums = {this.state.nums} address = {this.state.address} />
      </div>
    )
  }
}

export default Parent