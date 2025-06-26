import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      normalCount: 0,
      domCount: 0
    }
  }

  componentDidMount() {
    console.log('did mount')
    // document.title  = this.state.domCount
  }
  
  componentDidUpdate() {
    console.log('did update')
    document.title  = this.state.domCount
  }

  updateNormalCount = ()=> {
    this.setState({
      normalCount: this.state.normalCount+1
    })
  }

  updateDomCount = () => {
    this.setState({
      domCount: this.state.domCount+1
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>Normal count: {this.state.normalCount}</h3>
        <button onClick={this.updateNormalCount}>update normal count</button>
        <h3>Dom count: {this.state.domCount}</h3>
        <button onClick={this.updateDomCount}>update dom count</button>
      </div>
    )
  }
}

export default Parent