import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png" alt="website logo"></img>
        </Link>
       
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/programs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Our programs
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/javascript:void(0);'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to='/Signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login Now
            </Link>
          </li>
          <li>
            <Link
              to='/Checkout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Donate Now
            </Link>
          </li>
        </ul>
        <Button className='navbar__button' />
      </nav>
    </>
  );
}

export default Navbar;