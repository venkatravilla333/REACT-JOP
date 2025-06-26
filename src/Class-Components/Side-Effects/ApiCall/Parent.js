import React, { Component } from 'react'

import axios from 'axios'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      posts: [],
      error: null
    }
  }

  componentDidMount() {
    console.log('did mount')
    this.setState({
      ...this.state,
      loading: true,
    })
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({
          ...this.state,
          loading: false,
          posts: res.data
        })
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
          error: err.message
        })
    })
  }
  render() {
    console.log('render')
    var {loading, posts, error} = this.state
    return (
      <div>
        {
          loading ? <h3>Loading</h3> : error ? <h4>{error}</h4> :
            posts.map((post) => {
              return <div key={post.id} style={{border: '2px solid red', margin: '10px', padding: '10px'}}>
                <h6>Title: {post.title}</h6>
                <h6>Body: {post.body}</h6>
              </div>
            })
        }
      </div>
    )
  }
}

export default Parent