import React from "react"


var Hoc = (OriginalComponent) => {
  class New extends React.Component{

    constructor() {
      super()
      this.state = {
        count: 0
      }
    }

    updateCount = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
    render() {
      return <div>
        <OriginalComponent count={this.state.count} updateCount={this.updateCount} />
      </div>
    }
  }
  return New
}

export default Hoc