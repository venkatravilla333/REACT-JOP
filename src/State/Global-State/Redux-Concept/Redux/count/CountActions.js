import { increase, decrease } from "./countActionTypes"


export var increaseCount = () => {
  return {
    type: increase
  }
}

export var decreaseCount = () => {
  return {
    type: decrease
  }
}