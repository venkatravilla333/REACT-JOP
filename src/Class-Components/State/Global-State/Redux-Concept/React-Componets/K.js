import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/count/CountActions'


class K extends Component {
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
    // apiData: state.postsReducer,

  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    increase: () => { dispatch(increaseCount()) },
    decrease: () => { dispatch(decreaseCount()) }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (K)