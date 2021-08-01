import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Nav2.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

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

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WeShare
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
								to='/' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
                Beranda
              </Link>
            </li>
						<li className='nav-item'>
              <Link 
								to='/ayo-donasi' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
                Ayo Donasi
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/buka-donasi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buka Donasi
              </Link>
            </li>            
            <li>
              <Link
                to='/profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profil Saya
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Profil Saya</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
