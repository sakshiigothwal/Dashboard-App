import React from 'react'
import '../../styles/Navbar.css'
import Button from '../atoms/Button'

const loginClick= () => {
    alert("click")
}
const Navbar = () => {
    
  return (
    <nav className='navbar'>
        <ul className='nb-list'>
            <li>Home</li>
            <li>Blogs</li>
            <li><Button label="Login" onClick={loginClick} /></li>
        </ul>
    </nav>

  )
}

export default Navbar
