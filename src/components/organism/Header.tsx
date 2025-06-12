import React from 'react'
import '../../styles/Header.css'
import Navbar from '../molecules/Navbar'

const Header = () => {
  return (
    <div>
        <header className='header'>
        <h2>Dashboard Header</h2>
        <Navbar/>
        </header>
        
    </div>
  )
}

export default Header
