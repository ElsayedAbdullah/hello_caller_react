import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/login/logo.svg';
import './Login.scss';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='Login page' />
      </Helmet>
      <div className='login-wrapper'>
        <div className='welcome-section'>
          <p>Welcome to</p>
          <img width='237' height='52' className='img-fluid logo' src={logo} alt='logo' />
        </div>
        <div className='login-content'>
          <form className='login-form'>
            <div className='form-top'>
              <h2>Login / Sign Up</h2>
              <p className='login-txt'>In order to login, you need to enter your phone number to get an OTP</p>
              <div className='divider'></div>
              <div className='enter-num d-flex'>
                Enter your phone number
                <p id='phone-error'>
                  <svg className='mr-1 d-inline-block' width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0_116_11970)'>
                      <path d='M13.8249 10.96L8.2975 0.76978C8.16118 0.516961 7.95329 0.309986 7.69987 0.17478C7.35558 -0.00946823 6.95246 -0.0503227 6.57821 0.0611027C6.20395 0.172528 5.88882 0.42722 5.70137 0.76978L0.174872 10.96C0.0540279 11.1843 -0.00639358 11.4361 -0.000455431 11.6908C0.00548271 11.9454 0.0775762 12.1942 0.208741 12.4126C0.339906 12.6309 0.525628 12.8114 0.747659 12.9363C0.96969 13.0612 1.22039 13.1261 1.47512 13.1248H12.5246C12.7688 13.1248 13.0092 13.0647 13.2246 12.9498C13.3953 12.8592 13.5464 12.7357 13.6691 12.5864C13.7918 12.4372 13.8837 12.2651 13.9396 12.0801C13.9955 11.8951 14.0142 11.7009 13.9947 11.5087C13.9751 11.3164 13.9177 11.13 13.8257 10.96H13.8249ZM6.99987 11.3748C6.82681 11.3748 6.65764 11.3235 6.51375 11.2273C6.36986 11.1312 6.2577 10.9945 6.19148 10.8346C6.12525 10.6747 6.10792 10.4988 6.14168 10.3291C6.17545 10.1593 6.25878 10.0034 6.38115 9.88106C6.50352 9.75869 6.65943 9.67535 6.82917 9.64159C6.9989 9.60783 7.17483 9.62516 7.33472 9.69138C7.49461 9.75761 7.63126 9.86976 7.72741 10.0137C7.82355 10.1575 7.87487 10.3267 7.87487 10.4998C7.87487 10.7318 7.78268 10.9544 7.61859 11.1185C7.4545 11.2826 7.23194 11.3748 6.99987 11.3748V11.3748ZM7.87487 8.31228C7.87487 8.42831 7.82878 8.53959 7.74673 8.62164C7.66468 8.70369 7.5534 8.74978 7.43737 8.74978H6.56237C6.44634 8.74978 6.33506 8.70369 6.25301 8.62164C6.17097 8.53959 6.12487 8.42831 6.12487 8.31228V4.81228C6.12487 4.69625 6.17097 4.58497 6.25301 4.50292C6.33506 4.42087 6.44634 4.37478 6.56237 4.37478H7.43737C7.5534 4.37478 7.66468 4.42087 7.74673 4.50292C7.82878 4.58497 7.87487 4.69625 7.87487 4.81228V8.31228Z' fill='#C8102E' />
                    </g>
                    <defs>
                      <clipPath id='clip0_116_11970'>
                        <rect width='14' height='14' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  Please enter a valid phone number
                </p>
              </div>
              <div className='form-group'>
                <input type='text' id='mobile_code_login' className='form-control' placeholder='e.g 0123 456 7890' name='tel' />
              </div>
            </div>
            <button type='submit' className='d-flex align-items-center justify-content-center send-otp main-btn'>
              <span>Send OTP</span>
            </button>
          </form>

          <div className='otp-content'>
            <div className='otp-top'>
              <h2>
                OTP sent to{' '}
                <span className='tel' id='tel'>
                  "+20 100 019 3896"
                </span>
              </h2>
              <p>Check out your phone and enter the OTP you received down below</p>
              <div className='divider'></div>
              <p className='d-flex'>
                Enter OTP
                <span className='ml-3' id='digits-error'>
                  <svg className='mr-1 d-inline-block' width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0_116_119701)'>
                      <path d='M13.8249 10.96L8.2975 0.76978C8.16118 0.516961 7.95329 0.309986 7.69987 0.17478C7.35558 -0.00946823 6.95246 -0.0503227 6.57821 0.0611027C6.20395 0.172528 5.88882 0.42722 5.70137 0.76978L0.174872 10.96C0.0540279 11.1843 -0.00639358 11.4361 -0.000455431 11.6908C0.00548271 11.9454 0.0775762 12.1942 0.208741 12.4126C0.339906 12.6309 0.525628 12.8114 0.747659 12.9363C0.96969 13.0612 1.22039 13.1261 1.47512 13.1248H12.5246C12.7688 13.1248 13.0092 13.0647 13.2246 12.9498C13.3953 12.8592 13.5464 12.7357 13.6691 12.5864C13.7918 12.4372 13.8837 12.2651 13.9396 12.0801C13.9955 11.8951 14.0142 11.7009 13.9947 11.5087C13.9751 11.3164 13.9177 11.13 13.8257 10.96H13.8249ZM6.99987 11.3748C6.82681 11.3748 6.65764 11.3235 6.51375 11.2273C6.36986 11.1312 6.2577 10.9945 6.19148 10.8346C6.12525 10.6747 6.10792 10.4988 6.14168 10.3291C6.17545 10.1593 6.25878 10.0034 6.38115 9.88106C6.50352 9.75869 6.65943 9.67535 6.82917 9.64159C6.9989 9.60783 7.17483 9.62516 7.33472 9.69138C7.49461 9.75761 7.63126 9.86976 7.72741 10.0137C7.82355 10.1575 7.87487 10.3267 7.87487 10.4998C7.87487 10.7318 7.78268 10.9544 7.61859 11.1185C7.4545 11.2826 7.23194 11.3748 6.99987 11.3748V11.3748ZM7.87487 8.31228C7.87487 8.42831 7.82878 8.53959 7.74673 8.62164C7.66468 8.70369 7.5534 8.74978 7.43737 8.74978H6.56237C6.44634 8.74978 6.33506 8.70369 6.25301 8.62164C6.17097 8.53959 6.12487 8.42831 6.12487 8.31228V4.81228C6.12487 4.69625 6.17097 4.58497 6.25301 4.50292C6.33506 4.42087 6.44634 4.37478 6.56237 4.37478H7.43737C7.5534 4.37478 7.66468 4.42087 7.74673 4.50292C7.82878 4.58497 7.87487 4.69625 7.87487 4.81228V8.31228Z' fill='#C8102E' />
                    </g>
                    <defs>
                      <clipPath id='clip0_116_119701'>
                        <rect width='14' height='14' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  Only digits are allowed
                </span>
              </p>
              <form method='get' className='digit-group otp-form' data-group-name='digits' data-autosubmit='true' autoComplete='off'>
                <input type='tel' id='digit-1' name='digit-1' data-next='digit-2' />
                <input type='tel' id='digit-2' name='digit-2' data-next='digit-3' data-previous='digit-1' />
                <input type='tel' id='digit-3' name='digit-3' data-next='digit-4' data-previous='digit-2' />
                <input type='tel' id='digit-4' name='digit-4' data-next='digit-5' data-previous='digit-3' />
                <input type='tel' id='digit-5' name='digit-5' data-next='digit-6' data-previous='digit-4' />
                <input type='tel' id='digit-6' name='digit-6' data-next='digit-7' data-previous='digit-5' />
              </form>
            </div>
            <div className='otp-bottom'>
              <button className='btn btn-primary btn-block verify-btn main-btn' disabled>
                Verify
              </button>
              <p className='receive-code'>
                Didn’t receive the code?
                <a href='/#' id='resend-again'>
                  Resend Again
                </a>
                <span id='resend-counter'>
                  Resend in:{' '}
                  <strong>
                    <span id='countdown'>59</span>
                  </strong>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Link to='/' className='close'>
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.3973 2.17646L12.9686 0.747742L7.30437 6.41196L1.64015 0.747742L0.211426 2.17646L5.87565 7.84068L0.211426 13.5049L1.64015 14.9336L7.30437 9.2694L12.9686 14.9336L14.3973 13.5049L8.73309 7.84068L14.3973 2.17646Z' fill='#859396' />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Login;
