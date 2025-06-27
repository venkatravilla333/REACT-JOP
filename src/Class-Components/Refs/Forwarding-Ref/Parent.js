import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef = React.createRef()
  }

  ClickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focus()
  }
  render() {
    return (
      <div>
        <Child ref={this.componentRef} />
        <button onClick={this.ClickHandler}>click</button>
      </div>
    )
  }
}

export default Parent