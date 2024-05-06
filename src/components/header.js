import React, { useEffect, useState } from 'react'
import '../css/header.css'
import logo from '../images/logo-bookmark.svg';

export default function Header() {
    const[isNavOpen,setIsNavOpen] = useState(false)
    function toggleMenu(){
        setIsNavOpen(!isNavOpen)
    }
   
  return (
    <header>
        <div className="logoSection">
            <img className='logo' src={logo} alt="" />
            <svg id='menuIcon' onClick={toggleMenu} className='menuIcon'  xmlns="http://www.w3.org/2000/svg"  width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>
                
        </div>
        <nav className={`nav ${isNavOpen ? 'show' : 'hide'}`}>
            <ul>
            <svg className="closeIcon" id='closeIcon' style={{display: isNavOpen? 'flex':'none',cursor:'pointer',zIndex:'10'}} onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>

                <li className='firstListItem'><a href="#features">Features</a></li>
                {/* <hr /> */}
                <li><a href="#faqs">faqs</a></li>
                <li><a href="#contact">contact</a></li>
                <li className='login'>Login</li>
            </ul>
        </nav>
      
    </header>
  )
}
