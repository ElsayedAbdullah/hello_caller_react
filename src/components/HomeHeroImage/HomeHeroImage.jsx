import girlCalling from '../../imgs/homepage/girl-image.png';
import { getCountryCode } from '../../countrycode';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { useEffect, useRef } from 'react';
import './HomeHeroImage.scss';

const HomeHeroImage = () => {
  const telInput = useRef(null);

  useEffect(() => {
    function getIntlTelInput(input) {
      return intlTelInput(input, {
        separateDialCode: true,
        preventInvalidNumbers: true,
        initialCountry: 'auto',
        geoIpLookup: function (callback) {
          callback(getCountryCode());
        },
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
      });
    }
    getIntlTelInput(telInput.current);
  }, []);

  return (
    <div className='homepage-hero-image'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='hero-left'>
              <h1 className='pr-xxl-5'>Identify incoming calls & block spam calls.</h1>
              <div className='search hp-search'>
                <form>
                  <div className='form-group search-container d-flex justify-content-between align-items-center'>
                    <input ref={telInput} type='text' id='mobile_code' className='form-control' placeholder='Enter phone number...' name='tel' />
                    <button type='submit' className='d-flex align-items-center justify-content-center search-btn main-btn'>
                      <svg className='flex-shrink-0 mr-2' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z' fill='white' />
                      </svg>
                      <span>Search</span>
                    </button>
                  </div>
                  <p className='ml-3 phone-error'>
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
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image mt-4 mt-md-0 text-center text-md-right'>
              <img width='682' height='522' src={girlCalling} alt='girl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroImage;
