import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./count/countReducer";
import { postsReducer } from "./ApiCall/postsReducer";

import {thunk} from 'redux-thunk'

var rootReducer = combineReducers({
  countReducer,
  postsReducer
})


export var store = createStore(rootReducer, applyMiddleware(thunk))