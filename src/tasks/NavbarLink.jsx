import React from 'react'
import "../components/style.css"

function NavbarLink() {
  return (
 
     <>
    <h1>NavLink</h1>
    <nav className='navbar' >
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
    </nav>
    </>
  )
}

export default NavbarLink