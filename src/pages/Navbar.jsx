import React from 'react'
import {Link} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../images/hacky-newyear.png';
import "../css/Navbar.css"

import { LoginButton } from "../components/buttons/login-button";
import { LogoutButton } from "../components/buttons/logout-button";
import { SignupButton } from "../components/buttons/signup-button";

function Navbar() {
  let {isAuthenticated}=useAuth0();
  return (
    <div className='Navbar'>
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className='App-header'>Year World</h1>
        <nav className='nav'>
            <li class="nav-item">
              <Link to ="/">Home</Link>
              </li>
            <li class="nav-item">
              <Link to ="/about">About us</Link>
            </li>
            {!isAuthenticated ?(
              <>
              <LoginButton/>
              <SignupButton/>
              </>
            ):
            <>
                <LogoutButton/>
            </>
            }
            
        </nav>
    </div>
  )};
  
export default Navbar;