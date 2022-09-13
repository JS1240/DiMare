import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Naslovna</a></li>
        <li className="p__opensans"><a href="#about">Naša priča</a></li>
        <li className="p__opensans"><a href="#menu">Ponuda</a></li>
        <li className="p__opensans"><a href="#franchise">Franšiza</a></li>
        <li className="p__opensans"><a href="#contact">Kontakt</a></li>
      </ul>
      <div className="app__navbar-language">
        <img src={images.cro} alt="app__cro" />
          <div />
        <img src={images.eng} alt="app__eng" />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><a href="#home">Naslovna</a></li>
            <li className="p__opensans"><a href="#about">Naša priča</a></li>
            <li className="p__opensans"><a href="#menu">Ponuda</a></li>
            <li className="p__opensans"><a href="#franchise">Franšiza</a></li>
            <li className="p__opensans"><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
