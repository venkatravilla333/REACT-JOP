import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDetails() {
  var url = useLocation()
  console.log(url)
   var {id} = useParams()
  
  return (
    <div>ProductDetails: {id}, {url.state.name}</div>
  )
}

export default ProductDetails