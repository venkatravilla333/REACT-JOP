import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Toolkit/slices/countSlice'
import { buyCake } from '../Toolkit/slices/cakeSlice'


function K() {
  // var count = store.getState()

  var count = useSelector((state) => {
    return state.countReducer.count
  })
  var noOfCakes = useSelector((state) => {
    return state.cakeReducer.noOfCakes
  })
//  var apiData = useSelector((state) => {
//    return state.postsReducer
//  })

  var dispatch = useDispatch() 

  // var getPosts = () => {
  //   dispatch(fetchPosts())
  // }
  
  return (
    <div>
      <h2>K : {count}</h2>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <br />
      <h2>K  cakes: {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
      <br />
      {/* <button onClick={getPosts}>get posts</button>
      <h2>Posts</h2>
      {
        apiData.loading ? <h2>Loading</h2> : apiData.error ? <h3>{apiData.error}</h3> : 
          apiData.posts.map((obj) => {
            return <React.Fragment>
              <h3>Title: {obj.title}</h3>
              <h3>Body: {obj.body}</h3>
            </React.Fragment>
          })
      } */}
    
      
    </div>
  )
}

export default K