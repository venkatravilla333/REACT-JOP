
import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/countSlice'
import cakeReducer from './slices/cakeSlice'
import postsReducer from './slices/postsSlice'

// var store = createStore(rootreducer)

export var store = configureStore({
  reducer: {
    countReducer,
    cakeReducer,
    postsReducer
  }
})