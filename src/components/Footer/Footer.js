import React, { useState } from 'react';
import appStpreBtn from '../../imgs/homepage/app-store-btn.svg';
import logo from '../../imgs/homepage/footer-logo.svg';
import googlePlayBtn from '../../imgs/homepage/google-play-btn.svg';
import huaweiBtn from '../../imgs/homepage/huawei-app-gallery-btn.svg';
import saFlag from '../../imgs/sa.svg';
import usaFlag from '../../imgs/us.svg';
import './Footer.scss';

const Footer = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <footer className='bg-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3'>
            <div className='footer-col'>
              <h5>
                <a href='/' className='logo d-block'>
                  <img width='182' height='40' className='img-fluid d-block lazyload' src={logo} alt='logo' />
                </a>
              </h5>
              <p>We are a team of like-minded people that work together to make you feel connected. We want to ensure that you will have best experience using our app.</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='footer-col text-center'>
              <div className='d-lg-inline-block'>
                <h5 className='text-left'>App Download</h5>
                <ul className='footer-app-btns'>
                  <li>
                    <a href='https://play.google.com/store/apps/details?id=com.hello.calleridi' rel='noreferrer' target='_blank' className='app-btn'>
                      <img width='152' height='44' className='img-fluid' src={googlePlayBtn} loading='lazy' alt='google-play-btn' />
                    </a>
                  </li>
                  <li className='text-left'>
                    <img width='152' height='67' className='img-fluid d-block' src={appStpreBtn} loading='lazy' alt='app-store-btn' />
                  </li>
                  <li>
                    <a href='https://appgallery.huawei.com/#/app/C104604511' className='app-btn'>
                      <img width='152' height='44' className='img-fluid' src={huaweiBtn} loading='lazy' alt='huawei-app-gallery-btn' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='footer-col'>
              <h5>Contact Info</h5>
              <ul>
                <li>
                  Aknan Towers, Al-Salmiya, <br />
                  Kuwait - 20010
                </li>
                <li>
                  <a href='mailto:ask@hellocallers.com'>ask@hellocallers.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='footer-col last'>
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <a href='pricing.html'>Pricing</a>
                </li>
                <li>
                  <a href='contactus.html'>Contact Us</a>
                </li>
                <li>
                  <a href='privacy-policy.html'>Privacy Policy</a>
                </li>
                <li>
                  <a href='terms-of-service.html'>Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='row align-items-center'>
            <div className='col-md-6 order-2 order-md-1'>
              <p className='copyright'>
                &copy; <span id='year-now'></span> Hello? Caller ID. All rights reserved.
              </p>
            </div>
            <div className='col-md-6 order-1 order-md-2'>
              <div className='social-icons-parent d-flex align-items-center'>
                <ul className='social-icons d-flex align-items-center'>
                  <li>
                    <a href='https://twitter.com/hellocallers' target='_blank' rel='noreferrer'>
                      <svg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12 1.25C11.55 1.475 11.1 1.55 10.575 1.625C11.1 1.325 11.475 0.875 11.625 0.275C11.175 0.575 10.65 0.725 10.05 0.875C9.6 0.425 8.925 0.125 8.25 0.125C6.975 0.125 5.85 1.25 5.85 2.6C5.85 2.825 5.85 2.975 5.925 3.125C3.9 3.05 2.025 2.075 0.825 0.575C0.6 0.95 0.525 1.325 0.525 1.85C0.525 2.675 0.975 3.425 1.65 3.875C1.275 3.875 0.9 3.725 0.525 3.575C0.525 4.775 1.35 5.75 2.475 5.975C2.25 6.05 2.025 6.05 1.8 6.05C1.65 6.05 1.5 6.05 1.35 5.975C1.65 6.95 2.55 7.7 3.675 7.7C2.85 8.375 1.8 8.75 0.6 8.75C0.375 8.75 0.225 8.75 0 8.75C1.125 9.425 2.4 9.875 3.75 9.875C8.25 9.875 10.725 6.125 10.725 2.9C10.725 2.825 10.725 2.675 10.725 2.6C11.25 2.225 11.7 1.775 12 1.25Z' fill='#2C2FFE' />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/hellocallers' target='_blank' rel='noreferrer'>
                      <svg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M2.5172 12L2.5 6.75H0.25V4.5H2.5V3C2.5 0.9756 3.75363 0 5.55954 0C6.42458 0 7.16805 0.0644025 7.38471 0.0931875V2.2088L6.13222 2.20937C5.15007 2.20937 4.9599 2.67607 4.9599 3.36093V4.5H7.75L7 6.75H4.95989V12H2.5172Z' fill='#2C2FFE' />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/hellocallers/' target='_blank' rel='noreferrer'>
                      <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6 1.08075C7.602 1.08075 7.79175 1.0875 8.42475 1.116C8.80513 1.12057 9.18188 1.19059 9.5385 1.323C9.79934 1.41936 10.0352 1.57315 10.2285 1.773C10.4283 1.96634 10.5821 2.20216 10.6785 2.463C10.8109 2.81962 10.8809 3.19637 10.8855 3.57675C10.914 4.20975 10.9207 4.40175 10.9207 6.0015C10.9207 7.60125 10.914 7.79325 10.8855 8.42625C10.8809 8.80663 10.8109 9.18338 10.6785 9.54C10.5789 9.79883 10.4261 10.0339 10.23 10.23C10.0339 10.4261 9.79883 10.5789 9.54 10.6785C9.18338 10.8109 8.80663 10.8809 8.42625 10.8855C7.79325 10.914 7.60125 10.9207 6.0015 10.9207C4.40175 10.9207 4.20975 10.914 3.57675 10.8855C3.19637 10.8809 2.81962 10.8109 2.463 10.6785C2.20216 10.5821 1.96634 10.4283 1.773 10.2285C1.57315 10.0352 1.41936 9.79934 1.323 9.5385C1.19059 9.18188 1.12057 8.80513 1.116 8.42475C1.0875 7.79175 1.08075 7.59975 1.08075 6C1.08075 4.40025 1.0875 4.20825 1.116 3.57525C1.12057 3.19487 1.19059 2.81812 1.323 2.4615C1.41936 2.20066 1.57315 1.96484 1.773 1.7715C1.96634 1.57165 2.20216 1.41786 2.463 1.3215C2.81962 1.18909 3.19637 1.11907 3.57675 1.1145C4.20975 1.086 4.40175 1.07925 6.0015 1.07925M6 0C4.37025 0 4.16625 0.00675 3.525 0.036C3.02772 0.0461126 2.53575 0.140449 2.07 0.315C1.66947 0.465419 1.30673 0.7017 1.00725 1.00725C0.7017 1.30673 0.465419 1.66947 0.315 2.07C0.140449 2.53575 0.0461126 3.02772 0.036 3.525C0.00675 4.16625 0 4.37025 0 6C0 7.62975 0.00675 7.83375 0.036 8.475C0.0461126 8.97228 0.140449 9.46425 0.315 9.93C0.465419 10.3305 0.7017 10.6933 1.00725 10.9928C1.30673 11.2983 1.66947 11.5346 2.07 11.685C2.53622 11.8597 3.02871 11.9541 3.5265 11.964C4.16625 11.9932 4.37025 12 6 12C7.62975 12 7.83375 11.9932 8.475 11.964C8.97279 11.9541 9.46528 11.8597 9.9315 11.685C10.3301 11.5307 10.692 11.2949 10.9942 10.9927C11.2964 10.6905 11.5322 10.3286 11.6865 9.93C11.8612 9.46378 11.9556 8.97129 11.9655 8.4735C11.9948 7.83375 12.0015 7.62975 12.0015 5.9985C12.0015 4.36725 11.9948 4.16475 11.9655 3.5235C11.9547 3.02664 11.8599 2.53519 11.685 2.07C11.5346 1.66947 11.2983 1.30673 10.9928 1.00725C10.6933 0.7017 10.3305 0.465419 9.93 0.315C9.46425 0.140449 8.97228 0.0461126 8.475 0.036C7.83375 0.00675 7.62975 0 6 0Z' fill='#2C2FFE' />
                        <path d='M5.99995 2.91895C5.39058 2.91895 4.7949 3.09964 4.28823 3.43819C3.78157 3.77673 3.38667 4.25792 3.15347 4.8209C2.92028 5.38388 2.85927 6.00336 2.97815 6.60102C3.09703 7.19867 3.39047 7.74766 3.82135 8.17854C4.25224 8.60943 4.80122 8.90286 5.39887 9.02174C5.99653 9.14063 6.61601 9.07961 7.17899 8.84642C7.74197 8.61322 8.22316 8.21833 8.5617 7.71166C8.90025 7.20499 9.08095 6.60931 9.08095 5.99995C9.08095 5.59534 9.00125 5.1947 8.84642 4.8209C8.69158 4.44709 8.46464 4.10745 8.17854 3.82135C7.89245 3.53525 7.5528 3.30831 7.17899 3.15347C6.80519 2.99864 6.40455 2.91895 5.99995 2.91895ZM5.99995 8.0002C5.60433 8.0002 5.21761 7.88288 4.88867 7.66309C4.55973 7.4433 4.30335 7.13091 4.15196 6.76541C4.00056 6.39991 3.96095 5.99773 4.03813 5.60972C4.11531 5.22171 4.30582 4.8653 4.58556 4.58556C4.8653 4.30581 5.22171 4.11531 5.60972 4.03813C5.99773 3.96095 6.39991 4.00056 6.76541 4.15196C7.13091 4.30335 7.4433 4.55973 7.66309 4.88867C7.88288 5.21761 8.0002 5.60433 8.0002 5.99995C8.0002 6.53044 7.78946 7.03922 7.41434 7.41434C7.03922 7.78945 6.53045 8.0002 5.99995 8.0002Z' fill='#2C2FFE' />
                        <path d='M9.20242 3.51764C9.60007 3.51764 9.92242 3.19528 9.92242 2.79764C9.92242 2.39999 9.60007 2.07764 9.20242 2.07764C8.80478 2.07764 8.48242 2.39999 8.48242 2.79764C8.48242 3.19528 8.80478 3.51764 9.20242 3.51764Z' fill='#2C2FFE' />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/hellocallers/' target='_blank' rel='noreferrer'>
                      <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M11.475 0H0.525C0.225 0 0 0.225 0 0.525V11.55C0 11.775 0.225 12 0.525 12H11.55C11.85 12 12.075 11.775 12.075 11.475V0.525C12 0.225 11.775 0 11.475 0ZM3.525 10.2H1.8V4.5H3.6V10.2H3.525ZM2.7 3.75C2.1 3.75 1.65 3.225 1.65 2.7C1.65 2.1 2.1 1.65 2.7 1.65C3.3 1.65 3.75 2.1 3.75 2.7C3.675 3.225 3.225 3.75 2.7 3.75ZM10.2 10.2H8.4V7.425C8.4 6.75 8.4 5.925 7.5 5.925C6.6 5.925 6.45 6.675 6.45 7.425V10.275H4.65V4.5H6.375V5.25C6.6 4.8 7.2 4.35 8.025 4.35C9.825 4.35 10.125 5.55 10.125 7.05V10.2H10.2Z' fill='#2C2FFE' />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className='position-relative' id='lang-dropdown2'>
                  <button className='language-dropdown footer-lang-dropdown d-flex align-items-center justify-content-between' id='footerDropdown' onClick={() => setDropdown(!dropdown)} data-bs-toggle='dropdown' aria-expanded='false'>
                    <span className='lang d-flex align-items-center'>
                      <img width='20' height='20' className='mr-2 img-fluid' src={usaFlag} alt='usa flag' loading='lazy' />
                      <span className='mr-2'>English</span>
                    </span>
                    <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.0001 7.40001L0.600098 2.00001L2.0001 0.600006L6.0001 4.60001L10.0001 0.600006L11.4001 2.00001L6.0001 7.40001Z' fill='black' />
                    </svg>
                  </button>
                  <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} id='dropdown-menu2' aria-labelledby='footerDropdown'>
                    <li>
                      <a className='dropdown-item active' href='/'>
                        <img width='20' height='20' className='mr-2 img-fluid' src={usaFlag} loading='lazy' alt='usa flag' />
                        <span className='mr-2'>English</span>
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/index-rtl.html'>
                        <img width='20' height='20' className='mr-2 img-fluid' src={saFlag} loading='lazy' alt='saudi arabia flag' />
                        <span className='mr-2'>عربي</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
