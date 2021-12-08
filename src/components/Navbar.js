import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <i class="fab fa-medrt"></i>
         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ABCDE
          </Link>
           <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
             <NavLink to='/' className='nav-links' onClick={closeMobileMenu}
                >Home
              </NavLink></li>
             
            <li className='nav-item'>
              <NavLink
               to='/cards__container'
               className='nav-links' 
               onClick={closeMobileMenu}
             >
                Features
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
               to="/footer-container"
                className='nav-links'  
                onClick={closeMobileMenu}
               >
                Contact
              </NavLink>
            </li>

            <li>
              <Link
                to=''
                className='nav-links-mobile'
                onClick={closeMobileMenu}
               >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;





