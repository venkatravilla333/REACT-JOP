import { createStore } from "redux";


export var increase = () => {
  return {
    type: 'increase'
  }
}
export var decrease = () => {
  return {
    type: 'decrease'
  }
}



var initialState = {
  count:0
}


let countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      }
      break;
    case 'decrease':
      return {
        count: state.count - 1
      }
      break;
    default:
      return state
      
  }
}

export var store = createStore(countReducer)