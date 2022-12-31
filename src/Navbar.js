import React from 'react'
import logo from './hacky-newyear.png';
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className='App-header'>Year World</h1>
        <nav className='nav'>
            <li class="nav-item">Home</li>
            <li class="nav-item">About</li>
            <li class="nav-item">Log In</li>
        </nav>
    </div>
  )
}

export default Navbar