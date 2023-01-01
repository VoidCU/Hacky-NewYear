import React from 'react'
import {Link} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../images/slaabur.png';
import "../css/Navbar.css"

import { LoginButton } from "../components/buttons/login-button";
import { LogoutButton } from "../components/buttons/logout-button";
import { SignupButton } from "../components/buttons/signup-button";

function Navbar() {

  const {isAuthenticated , user } = useAuth0();
  return (
    <div className='Navbar'>
        <div  className="App-logo-div" >
          <img src={logo} className='App-logo' alt="logo"/>
          
          </div>
        <nav className='nav'>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About us</Link>
            {!isAuthenticated ?(
              <>
              <LoginButton className='nav-item'/>
              <SignupButton className='nav-item'/>
              </>
            ):
            <>
              <Link className='userpo' to="/profile"><img src={user.picture} id='userphoto' alt='hero'/></Link>
              <LogoutButton className='nav-item'/>
            </>
            }
            
        </nav>
    </div>
  )};
  
export default Navbar;