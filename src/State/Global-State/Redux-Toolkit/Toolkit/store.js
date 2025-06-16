
import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/countSlice'
import cakeReducer from './slices/cakeSlice'

// var store = createStore(rootreducer)

export var store = configureStore({
  reducer: {
    countReducer,
    cakeReducer
  }
})