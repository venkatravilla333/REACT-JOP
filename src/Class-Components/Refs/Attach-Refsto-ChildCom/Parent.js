import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef = React.createRef()
    
  }

  handleClick = () => {
    this.componentRef.current.focusInput()
    console.log(this.componentRef.current)
  }
  render() {
    return (
      <div>
        <Child ref={this.componentRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Parent