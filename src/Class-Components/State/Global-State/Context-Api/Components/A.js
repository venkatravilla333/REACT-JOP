import React, { Component } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext()
export var nameContext = React.createContext()
export var colorContext = React.createContext()

export class A extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       count: 0,
       name: 'sachin',
       color: 'red'
     }
  }
  
  updateState = () => {
    this.setState({
      count: this.state.count + 1,
      name: this.state.name = 'kohli',
      color: this.state.color = 'green'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateState}>update state</button>
        <colorContext.Provider value={this.state.color}>
        <nameContext.Provider value={this.state.name}>
        <countContext.Provider value={this.state.count}>
        <B />
        <C/>
        </countContext.Provider>
        </nameContext.Provider>
        </colorContext.Provider>
      </div>
    )
  }
}

export default A