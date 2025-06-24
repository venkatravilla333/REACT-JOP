import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Header