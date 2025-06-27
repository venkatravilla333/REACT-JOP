// import React, { Component } from 'react'

// class Parent extends Component {
//   render() {
//     console.log('render')
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     )
//   }
// }

// export default Parent


import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    // this.inputRef = React.createRef()
    this.cbRef = null
    this.RefFun = (domElement) => {
      this.cbRef = domElement
    }
    

  }
  componentDidMount() {
    // console.log(this.inputRef.current)
    // this.inputRef.current.focus()
    if (this.cbRef) {
      this.cbRef.focus()
    }

  }
  render() {
    return (
      // <input type="text" ref={this.inputRef} />
      <input type="text" ref={this.RefFun} />
    )
  }
}

export default Parent