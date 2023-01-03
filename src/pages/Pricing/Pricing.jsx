import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HideNumberForm from '../../components/HideNumberForm/HideNumberForm';
import './Pricing.scss';

const Pricing = () => {
  return (
    <div className='pricing-page'>
      <Header className='search-header' />
      {/* <!-- Upgrade Premium --> */}
      <section className='upgrade-premium'>
        <div className='container'>
          <h1 className='section-title text-white text-center'>Services pricing</h1>
          <h3>
            Subscription Plans <span>(Pick the best one for you!)</span>
          </h3>
          <div className='pricing-plans'>
            <div className='row'>
              <div className='col-md-6 col-lg-3 d-flex'>
                <div className='plan year-plan main-plan w-100'>
                  <div className='recommended d-inline-flex align-items-center justify-content-center'>
                    <svg className='mr-1 mr-md-2' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M17.3581 6.40817L12.0474 5.63642L9.67512 0.827417C9.60615 0.71031 9.50781 0.613235 9.38982 0.545791C9.27183 0.478347 9.13828 0.442871 9.00237 0.442871C8.86646 0.442871 8.73291 0.478347 8.61492 0.545791C8.49693 0.613235 8.39859 0.71031 8.32962 0.827417L5.95287 5.63642L0.642122 6.40817C0.503627 6.42816 0.373487 6.48649 0.266414 6.57658C0.159341 6.66667 0.0796056 6.78491 0.0362229 6.91795C-0.00715979 7.05098 -0.0124599 7.1935 0.0209218 7.32939C0.0543036 7.46528 0.125036 7.58913 0.225122 7.68692L4.06887 11.4324L3.16212 16.7222C3.13849 16.8601 3.15392 17.0019 3.20666 17.1315C3.2594 17.2611 3.34735 17.3734 3.46057 17.4556C3.57379 17.5379 3.70776 17.5868 3.84733 17.5969C3.9869 17.607 4.12651 17.5778 4.25037 17.5127L9.00012 15.0159L13.7499 17.5127C13.8737 17.5778 14.0133 17.607 14.1529 17.5969C14.2925 17.5868 14.4265 17.5379 14.5397 17.4556C14.6529 17.3734 14.7408 17.2611 14.7936 17.1315C14.8463 17.0019 14.8618 16.8601 14.8381 16.7222L13.9314 11.4324L17.7751 7.68692C17.8752 7.58922 17.9459 7.4655 17.9794 7.32972C18.0128 7.19394 18.0077 7.05151 17.9645 6.91852C17.9212 6.78552 17.8417 6.66725 17.7348 6.57707C17.628 6.48689 17.498 6.42839 17.3596 6.40817H17.3581Z' fill='white' />
                    </svg>
                    <span>Recommended</span>
                  </div>
                  <div className='plan-period'>
                    12 Months <span className='off'>(80% Off)</span>
                  </div>
                  <div className='plan-price d-inline-block'>
                    <div className='usd'>$99</div>
                    <sup className='cent'>99</sup>
                  </div>
                  <div className='plan-autorenewal-text'>Auto renewes after 365 days</div>
                  <div className='divider'></div>
                  <ul className='plan-features'>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Unlimited searches</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>No ADs</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Premium badge</p>
                    </li>
                  </ul>
                  <a href='#' className='subscribe-btn'>
                    SUBSCRIBE
                  </a>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 d-flex'>
                <div className='plan six-months-plan w-100'>
                  <div className='plan-period'>
                    6 Months <span className='off'>(70% Off)</span>
                  </div>
                  <div className='plan-price d-inline-block'>
                    <div className='usd'>$69</div>
                    <sup className='cent'>99</sup>
                  </div>
                  <div className='plan-autorenewal-text'>Auto renewes after 180 days</div>
                  <div className='divider'></div>
                  <ul className='plan-features'>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Unlimited searches</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>No ADs</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Premium badge</p>
                    </li>
                  </ul>
                  <a href='#' className='subscribe-btn'>
                    SUBSCRIBE
                  </a>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 d-flex'>
                <div className='plan month-plan w-100'>
                  <div className='plan-period'>1 Month</div>
                  <div className='plan-price d-inline-block'>
                    <div className='usd'>$19</div>
                    <sup className='cent'>99</sup>
                  </div>
                  <div className='plan-autorenewal-text'>Auto renewes after 30 days</div>
                  <div className='divider'></div>
                  <ul className='plan-features'>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Unlimited searches</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>No ADs</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Premium badge</p>
                    </li>
                  </ul>
                  <a href='#' className='subscribe-btn'>
                    SUBSCRIBE
                  </a>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 d-flex'>
                <div className='plan seven-days-plan w-100'>
                  <div className='plan-period'>7 Days</div>
                  <div className='plan-price d-inline-block'>
                    <div className='usd'>$9</div>
                    <sup className='cent'>99</sup>
                  </div>
                  <div className='plan-autorenewal-text'>Auto renewes after 7 days</div>
                  <div className='divider'></div>
                  <ul className='plan-features'>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Unlimited searches</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>No ADs</p>
                    </li>
                    <li>
                      <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.99994 11C5.73474 10.9999 5.48043 10.8945 5.29294 10.707L0.585938 6L1.99994 4.586L5.99994 8.586L13.9999 0.585999L15.4139 2L6.70694 10.707C6.51944 10.8945 6.26513 10.9999 5.99994 11Z' fill='#2C2FFE' />
                      </svg>
                      <p>Premium badge</p>
                    </li>
                  </ul>
                  <a href='#' className='subscribe-btn'>
                    SUBSCRIBE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className='mt-4 mt-lg-5 mb-4'>Other Services</h3>
          {/* <!-- Users Reviews --> */}
          <div className='users-reviews'>
            <div className='row'>
              <div className='col'>
                <HideNumberForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
