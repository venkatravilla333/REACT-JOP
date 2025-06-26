import React, { Component } from 'react'
import Parent from './Parent'

export class Container extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       display: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({display: false})}>toggle display</button>
        {this.state.display && <Parent/>}
      </div>
    )
  }
}

export default Container