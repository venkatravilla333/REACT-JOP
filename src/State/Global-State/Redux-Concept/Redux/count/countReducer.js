

var initialState = {
  count:0
}


export let countReducer = (state = initialState, action) => {
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