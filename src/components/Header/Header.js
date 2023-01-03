import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import saFlag from '../../imgs/sa.svg';
import usaFlag from '../../imgs/us.svg';

const Header = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const btnRef = useRef();

  // to close dropdown when clicking outside of it
  useEffect(() => {
    const closeDropdown = (e) => {
      const btn = e.target.closest('.language-dropdown');
      if (btn !== btnRef.current) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, []);
  return (
    <header className={props.className}>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link to='/' className='main-logo d-flex align-items-center'>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' clipRule='evenodd' d='M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0Z' fill='#2C2FFE' />
              <path fillRule='evenodd' clipRule='evenodd' d='M26.8104 10.9716C24.7502 10.9716 22.4656 12.1619 22.4656 19.9095C22.4656 27.657 24.7493 28.8474 26.8104 28.8474C27.4701 28.8474 27.9273 28.676 28.2287 28.493C28.5372 28.3047 28.6858 27.9423 28.5946 27.5929C28.3662 26.7208 27.8743 24.8391 27.6464 23.9666C27.5716 23.6799 27.3472 23.46 27.0606 23.387L25.6071 23.0189C25.2817 22.9365 25.0413 22.6677 25.0004 22.3347C24.9296 21.7591 24.8339 20.814 24.8339 19.9086C24.8339 19.0031 24.9296 18.058 25.0004 17.4824C25.0413 17.1495 25.2817 16.8806 25.6071 16.7982L27.0606 16.4301C27.3477 16.3575 27.5725 16.1345 27.6473 15.8478L28.5937 12.2287C28.6849 11.8783 28.5363 11.5124 28.2264 11.3246C27.926 11.1416 27.4688 10.9711 26.8104 10.9716ZM13.1897 10.9716C12.5313 10.9711 12.0741 11.1416 11.7737 11.3246C11.4793 11.503 11.3304 11.8422 11.3945 12.176L11.4064 12.2287L12.3528 15.8478C12.4229 16.1166 12.6249 16.3294 12.8864 16.4147L12.9395 16.4301L14.393 16.7982C14.7184 16.8806 14.9588 17.1495 14.9997 17.4824C15.0705 18.058 15.1662 19.0031 15.1662 19.9086C15.1662 20.814 15.0705 21.7591 14.9997 22.3347C14.9609 22.6501 14.7431 22.9081 14.4436 23.0044L14.393 23.0189L12.9395 23.387C12.6529 23.46 12.4285 23.6799 12.3537 23.9666C12.1258 24.8391 11.6339 26.7208 11.4055 27.5929C11.3143 27.9423 11.4629 28.3047 11.7714 28.493C12.0728 28.676 12.53 28.8474 13.1897 28.8474C15.2508 28.8474 17.5345 27.657 17.5345 19.9095C17.5345 12.1619 15.2499 10.9716 13.1897 10.9716ZM20 18.6426C19.2503 18.6426 18.6425 19.2504 18.6425 20.0001C18.6425 20.7498 19.2503 21.3576 20 21.3576C20.7497 21.3576 21.3575 20.7498 21.3575 20.0001C21.3575 19.2504 20.7497 18.6426 20 18.6426Z' fill='white' />
            </svg>
            <span className='ml-2 d-none d-md-inline-block'>Hello? Caller ID</span>
          </Link>

          <div className='collapse navbar-collapse show' id='navbarSupportedContent'>
            <div className='container nav-container'>
              <ul className='navbar-nav ml-auto mb-2 mb-lg-0 align-items-lg-center d-flex'>
                <li className='mr-lg-3'>
                  <Link to='/contactus' className='contact-link'>
                    Contact Us
                  </Link>
                </li>
                <li className='mr-lg-3 nav-item dropdown' id='lang-dropdown'>
                  <button ref={btnRef} className='language-dropdown d-flex align-items-center justify-content-between' id='navbarDropdown' type='button' onClick={() => setShowDropdown(!showDropdown)} data-bs-toggle='dropdown' aria-expanded='false'>
                    <span className='language d-lg-none'>Language</span>
                    <span className='d-flex align-items-center'>
                      <span className='lang d-flex align-items-center'>
                        <img className='img-fluid flag' src={usaFlag} alt='usa flag' />
                        <span className='mr-2'>English</span>
                      </span>
                      <svg className={`${showDropdown ? 'inverted' : ''}`} width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6.0001 7.40001L0.600098 2.00001L2.0001 0.600006L6.0001 4.60001L10.0001 0.600006L11.4001 2.00001L6.0001 7.40001Z' fill='black' />
                      </svg>
                    </span>
                  </button>
                  <ul className={`dropdown-menu mb-screen ${showDropdown ? 'show' : ''}`} id='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <a className='dropdown-item nav-dropdown-item active' href='/index.html'>
                        <img className='img-fluid flag' src={usaFlag} alt='usa flag' />
                        <span className='mr-2'>English</span>
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item nav-dropdown-item' href='/index-rtl.html'>
                        <img className='img-fluid flag' src={saFlag} alt='usa flag' />
                        <span className='mr-2'>عربي</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='d-none d-lg-flex'>
                  <Link to='/login' className='login main-btn'>
                    Login / Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='d-lg-none d-flex align-items-center'>
            <div className='hamburger' id='hamburger-11'>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </div>
            <Link to='/login' className='login main-btn'>
              Login / Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
