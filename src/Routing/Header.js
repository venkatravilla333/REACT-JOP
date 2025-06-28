import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" style={({isActive}) => {
        return isActive ? {color: 'red'} : null
      }}>
        
        {/* {({ isActive }) => {
          return isActive ? <h5>About</h5> : <h5>Inactive</h5>
         }} */}
        About
        
      </NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  )
}

export default Header