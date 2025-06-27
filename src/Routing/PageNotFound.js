import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function PageNotFound() {
  var navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  })

  return (
    // <Navigate to='/home'/>
    <h3>Page not found 404</h3>
  )
}

export default PageNotFound