import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Gabung bersama milis WeShare dan dapatkan info terbaru.
        </p>
        <p className='footer-subscription-text'>
          Kamu bisa berhenti kapan saja.
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>Daftar</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>Menu</h2>
            <Link to='/sign-up'>Ayo Donasi</Link>
            <Link to='/'>Buka Donasi</Link>
            <Link to='/tentang-kami'>Tentang Kami</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Lokasi Kami</h2>
            <Link to='/'>Jalan Hayam Wuruk No. 88</Link>
            <Link to='/'>Jakarta Barat</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Kontak kami</h2>
            <Link to='/'>Email: @gmail.com</Link>
            <Link to='/'>Telp: (021) 3920192</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              WeShare
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>WeShare © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
