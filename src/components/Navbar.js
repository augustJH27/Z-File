import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Beranda
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/ayodonasi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ayo Donasi
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bukadonasi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buka Donasi
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/tentangkami'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tentang Kami
              </Link>
            </li>            
            <li>
              <Link
                to='/daftar'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Mulai
              </Link>
            </li>
            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Daftar
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Masuk</Button>} */}
          {button && <Button buttonStyle='btn--outline'>Mulai</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
