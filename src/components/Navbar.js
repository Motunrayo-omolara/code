import React from 'react';
import { useState } from "react";
import menuI from '../assets/menuI.png'


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="ttitle" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src="menuI"
            menuOpen
              
          
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
    
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
      </div>
    </nav>
  );
};