import axios from "axios"
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postsActionTypes"


var fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
var fetchPostSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
}
var fetchPostFailure = (err) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err
  }
}

export var fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispatch(fetchPostSuccess(res.data))
      }).catch((err) => {
      dispatch(fetchPostFailure(err.message))
    })
  }
}