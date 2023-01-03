import './Homepage.scss';

import DownloadApp from '../../components/DownloadApp/DownloadApp';
import callerIdentification from '../../imgs/homepage/caller-identification.svg';
import contactDetails from '../../imgs/homepage/contact-details.png';
import contactWidget from '../../imgs/homepage/contact-widget.png';

import reviewStars from '../../imgs/homepage/review-stars.svg';
import searchFollow from '../../imgs/homepage/search-follow-up.svg';
import smartOptions from '../../imgs/homepage/smart-options.png';
import spamProtection from '../../imgs/homepage/spam-protection.svg';
import HomeHeroImage from '../../components/HomeHeroImage/HomeHeroImage';
import Header from '../../components/Header/Header';
import HideNumberForm from '../../components/HideNumberForm/HideNumberForm';

const Homepage = () => {
  return (
    <>
      {/* Hero Image */}
      <div className='wrapper'>
        <Header className='homepage-header' />
        <HomeHeroImage />
      </div>
      {/* Start App Features  */}
      <section className='section app-features text-center'>
        <div className='container'>
          <h2 className='section-title mb-4 mb-md-5 py-xl-5'>App Features</h2>
          <div className='row'>
            <div className='col-md-4 d-flex'>
              <div className='feat-box mb-4 mb-md-0 w-100'>
                <img width='312' height='260' className='img-fluid' src={callerIdentification} alt='caller-identification' />
                <h3 className='mb-3'>Caller Identification</h3>
                <p>Identify unknown numbers, spam or business numbers! Know the real identity and location of callers from all around the world.</p>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='feat-box mb-4 mb-md-0 w-100'>
                <img width='312' height='260' className='img-fluid' src={spamProtection} alt='spam-protection' />
                <h3 className='mb-3'>Spam Protection</h3>
                <p>Block spam numbers and robocalls. We keep our spam list updated with our community so you are always protected against spam calls.</p>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='feat-box mb-4 mb-md-0 w-100'>
                <img width='312' height='260' className='img-fluid' src={searchFollow} alt='search-follow-up' />
                <h3 className='mb-3'>Search Follow-Up</h3>
                <p>Tired of seeing ‘No results found’? Don’t worry, we got you covered. We will find the identity of that number and notify you instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Widget */}
      <section className='section contact-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-11 col-xl-10 m-auto'>
              <div className='contact-widget-content'>
                <div className='row align-items-center'>
                  <div className='col-md-6 col-lg-5'>
                    <div className='text mb-3 mb-md-0'>
                      <h2 className='mb-4 section-title'>Contact Widget</h2>
                      <p>We will display the identity of the person such as name and image for Incoming or Outgoing calls. Spam calls can be identified and avoided with the widget.</p>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-7'>
                    <div className='image'>
                      <img width='492' height='617' className='img-fluid' src={contactWidget} alt='contact-widget' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Details--> */}
      <section className='section contact-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-11 col-xl-10 m-auto'>
              <div className='contact-details-content'>
                <div className='row align-items-center'>
                  <div className='col-md-6 col-lg-8 order-2 order-md-1'>
                    <div className='image'>
                      <img width='655' height='621' className='img-fluid' src={contactDetails} alt='contact-details' />
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 order-1 order-md-2'>
                    <div className='text'>
                      <h2 className='mb-4 section-title'>Contact Details</h2>
                      <p>See contact photo, name, phone number, emails and business location all in one place. We also show you other names of the contact by popularity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Smart Options --> */}
      <section className='section smart-options'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-11 col-xl-10 m-auto'>
              <div className='smart-options-content'>
                <div className='row align-items-center'>
                  <div className='col-md-6'>
                    <div className='text'>
                      <h2 className='mb-4 section-title'>Smart Options</h2>
                      <ul>
                        <li>Start a call directly from the options.</li>
                        <li>Send a WhatsApp message, SMS or an email.</li>
                        <li>Copy or save the contact to your phone.</li>
                        <li>Suggest an edit, hide or report as spam.</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='image mt-5 mt-md-0'>
                      <img width='475' height='483' className='img-fluid' src={smartOptions} alt='smart-options' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Upgrade Premium --> */}
      <section className='upgrade-premium-section text-white text-md-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-xl-8 m-auto'>
              <h2 className='mb-4 section-title'>Upgrade to premium</h2>
              <p>When you upgrade to premium you get:</p>
              <ul>
                <li>
                  <svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6.00006 11.0024C5.73486 11.0023 5.48055 10.8969 5.29306 10.7094L0.58606 6.00238L2.00006 4.58838L6.00006 8.58838L14.0001 0.588379L15.4141 2.00238L6.70706 10.7094C6.51957 10.8969 6.26525 11.0023 6.00006 11.0024Z' fill='#FB5B29' />
                  </svg>
                  <p>Unlimited searches</p>
                </li>
                <li>
                  <svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6.00006 11.0024C5.73486 11.0023 5.48055 10.8969 5.29306 10.7094L0.58606 6.00238L2.00006 4.58838L6.00006 8.58838L14.0001 0.588379L15.4141 2.00238L6.70706 10.7094C6.51957 10.8969 6.26525 11.0023 6.00006 11.0024Z' fill='#FB5B29' />
                  </svg>
                  <p>No ADs</p>
                </li>
                <li>
                  <svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6.00006 11.0024C5.73486 11.0023 5.48055 10.8969 5.29306 10.7094L0.58606 6.00238L2.00006 4.58838L6.00006 8.58838L14.0001 0.588379L15.4141 2.00238L6.70706 10.7094C6.51957 10.8969 6.26525 11.0023 6.00006 11.0024Z' fill='#FB5B29' />
                  </svg>
                  <p>Premium membership badge</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='pricing-plans'>
            <div className='plan year-plan main-plan text-center'>
              <div className='recommended d-inline-flex align-items-center justify-content-center'>
                <svg className='mr-2' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M17.3581 6.40817L12.0474 5.63642L9.67512 0.827417C9.60615 0.71031 9.50781 0.613235 9.38982 0.545791C9.27183 0.478347 9.13828 0.442871 9.00237 0.442871C8.86646 0.442871 8.73291 0.478347 8.61492 0.545791C8.49693 0.613235 8.39859 0.71031 8.32962 0.827417L5.95287 5.63642L0.642122 6.40817C0.503627 6.42816 0.373487 6.48649 0.266414 6.57658C0.159341 6.66667 0.0796056 6.78491 0.0362229 6.91795C-0.00715979 7.05098 -0.0124599 7.1935 0.0209218 7.32939C0.0543036 7.46528 0.125036 7.58913 0.225122 7.68692L4.06887 11.4324L3.16212 16.7222C3.13849 16.8601 3.15392 17.0019 3.20666 17.1315C3.2594 17.2611 3.34735 17.3734 3.46057 17.4556C3.57379 17.5379 3.70776 17.5868 3.84733 17.5969C3.9869 17.607 4.12651 17.5778 4.25037 17.5127L9.00012 15.0159L13.7499 17.5127C13.8737 17.5778 14.0133 17.607 14.1529 17.5969C14.2925 17.5868 14.4265 17.5379 14.5397 17.4556C14.6529 17.3734 14.7408 17.2611 14.7936 17.1315C14.8463 17.0019 14.8618 16.8601 14.8381 16.7222L13.9314 11.4324L17.7751 7.68692C17.8752 7.58922 17.9459 7.4655 17.9794 7.32972C18.0128 7.19394 18.0077 7.05151 17.9645 6.91852C17.9212 6.78552 17.8417 6.66725 17.7348 6.57707C17.628 6.48689 17.498 6.42839 17.3596 6.40817H17.3581Z' fill='white' />
                </svg>
                <span>Recommended</span>
              </div>
              <div className='plan-period'>
                12 Months <span className='off'>(80% Off)</span>
              </div>
              <div className='plan-price d-inline-block'>
                <div className='usd'>$99</div>
                <span className='cent'>99</span>
              </div>
              <div className='plan-autorenewal-text'>Auto renewes after 365 days</div>
              <a href='/#' className='subscribe-btn'>
                SUBSCRIBE
              </a>
            </div>
            <div className='plan six-months-plan text-center'>
              <div className='plan-period'>
                6 Months <span className='off'>(70% Off)</span>
              </div>
              <div className='plan-price d-inline-block'>
                <div className='usd'>$69</div>
                <span className='cent'>99</span>
              </div>
              <div className='plan-autorenewal-text'>Auto renewes after 180 days</div>
              <a href='/#' className='subscribe-btn'>
                SUBSCRIBE
              </a>
            </div>
            <div className='plan month-plan text-center'>
              <div className='plan-period'>1 Month</div>
              <div className='plan-price d-inline-block'>
                <div className='usd'>$19</div>
                <span className='cent'>99</span>
              </div>
              <div className='plan-autorenewal-text'>Auto renewes after 30 days</div>
              <a href='/#' className='subscribe-btn'>
                SUBSCRIBE
              </a>
            </div>
            <div className='plan seven-days-plan text-center'>
              <div className='plan-period'>7 Days</div>
              <div className='plan-price d-inline-block'>
                <div className='usd'>$9</div>
                <span className='cent'>99</span>
              </div>
              <div className='plan-autorenewal-text'>Auto renewes after 7 days</div>
              <a href='/#' className='subscribe-btn'>
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Users Reviews --> */}
      <section className='hide-number-section'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <HideNumberForm />
            </div>
          </div>
        </div>
      </section>
      <section className='users-reviews-section'>
        <div className='reviews'>
          <h2 className='text-center section-title'>Users love it, you will too :)</h2>
          <div className='top-reviews'>
            <div className='review'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Omrsmsm 2015</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>So 😍 Fantastic!</div>
                <div className='review-text arabic'>رائع 😍 جدا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>MINE CRAFT MODS</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/7, 8:25 AM</span>
                </div>
                <div className='review-text english'>Highly recommended, help you identify unknown numbers.</div>
                <div className='review-text arabic'>انصح بالتنزيل يتيح لك التعرف على الأرقام الغريبه</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Smaa Mahamed</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/11, 1:32 AM</span>
                </div>
                <div className='review-text english'>Thanks for providers, very nice application</div>
                <div className='review-text arabic'>شكرا للقائمين عليه برنامج جميل جدا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Abdalla El Hamaki</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 12:38 AM</span>
                </div>
                <div className='review-text english'>Very beautiful and Amazing</div>
                <div className='review-text arabic'>جميل جدا ورائع</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>M Kimo</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 3:16 PM</span>
                </div>
                <div className='review-text english'>Excellent app, Thank you for this app</div>
                <div className='review-text arabic'>تطبيق ممتاز شكرا جدا للمسئول عن هذا التطبيق</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>SADAM صدام HUSEN حسين</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 3:16 PM</span>
                </div>
                <div className='review-text english'>Very good and highly accurate in identifying the names</div>
                <div className='review-text arabic'>جيد جدا ودقيق بإظهار الاسم</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Magdi Affify</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/12, 1:46 PM</span>
                </div>
                <div className='review-text english'>Highly recommended, help you identify unknown numbers.</div>
                <div className='review-text arabic'>ممتاز جداً وشكرا لكم جميعا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            {/* <!-- repeated --> */}
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Omrsmsm 2015</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>So 😍 Fantastic!</div>
                <div className='review-text arabic'>رائع 😍 جدا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>MINE CRAFT MODS</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/7, 8:25 AM</span>
                </div>
                <div className='review-text english'>Highly recommended, help you identify unknown numbers.</div>
                <div className='review-text arabic'>انصح بالتنزيل يتيح لك التعرف على الأرقام الغريبه</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Smaa Mahamed</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/11, 1:32 AM</span>
                </div>
                <div className='review-text english'>Thanks for providers, very nice application</div>
                <div className='review-text arabic'>شكرا للقائمين عليه برنامج جميل جدا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Abdalla El Hamaki</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 12:38 AM</span>
                </div>
                <div className='review-text english'>Very beautiful and Amazing</div>
                <div className='review-text arabic'>جميل جدا ورائع</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>M Kimo</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 3:16 PM</span>
                </div>
                <div className='review-text english'>Excellent app, Thank you for this app</div>
                <div className='review-text arabic'>تطبيق ممتاز شكرا جدا للمسئول عن هذا التطبيق</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>SADAM صدام HUSEN حسين</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/1, 3:16 PM</span>
                </div>
                <div className='review-text english'>Very good and highly accurate in identifying the names</div>
                <div className='review-text arabic'>جيد جدا ودقيق بإظهار الاسم</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Magdi Affify</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/12, 1:46 PM</span>
                </div>
                <div className='review-text english'>Highly recommended, help you identify unknown numbers.</div>
                <div className='review-text arabic'>ممتاز جداً وشكرا لكم جميعا</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
          </div>
          <div className='bottom-reviews'>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Hayat Hayat</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/14, 4:58 PM</span>
                </div>
                <div className='review-text english'>It’s so wonderful app and highly recommended 💖💖</div>
                <div className='review-text arabic'>إنه تطبيق رائع وأنصح بتحميله 💖💖</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Mohmoud Hosni</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/18, 5:51 PM</span>
                </div>
                <div className='review-text english'>Discovered interesting stuff 🤡💔 app is so so deadly sweet</div>
                <div className='review-text arabic'>انا اكتشفت بلاوي 🤡💔 التطبيق حلو اوووي اوووي موت</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Rouiched Rachid</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/17, 1:13 AM</span>
                </div>
                <div className='review-text english'>Good application new experience thank you</div>
                <div className='review-text arabic'>Bonne application nouvelle expèrience merci</div>
              </div>
              <div className='translate show-arabic'>
                Translated from French <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>اشرف اشرف</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>Sat, 2:30 AM</span>
                </div>
                <div className='review-text english'>Identify who’s calling and has a nice name</div>
                <div className='review-text arabic'>يعرف من هو المتصل واسمه جميل</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>ابن الاكابر</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>Honestly, Amazing App, geetings to you. Excellent experience!</div>
                <div className='review-text arabic'>بصراحة برنامج رائع تحياتي لكم ممتازة عن تجربة</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>GBAAR ALKFAGY</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>Yesterday, 10:24 PM</span>
                </div>
                <div className='review-text english'>Thank you, Great application. I wish you success</div>
                <div className='review-text arabic'>شكرا لكم تطبيق روعه اتمنى لكم الموفقيه</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review hidden-item d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>الهامى مصطفى</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>Excellent, Highly recommend this app</div>
                <div className='review-text arabic'>ممتاز أنصح بهذا التطبيق رائع</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            {/* <!-- repeated --> */}
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Hayat Hayat</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/14, 4:58 PM</span>
                </div>
                <div className='review-text english'>It’s so wonderful app and highly recommended 💖💖</div>
                <div className='review-text arabic'>إنه تطبيق رائع وأنصح بتحميله 💖💖</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Mohmoud Hosni</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/18, 5:51 PM</span>
                </div>
                <div className='review-text english'>Discovered interesting stuff 🤡💔 app is so so deadly sweet</div>
                <div className='review-text arabic'>انا اكتشفت بلاوي 🤡💔 التطبيق حلو اوووي اوووي موت</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>Rouiched Rachid</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/17, 1:13 AM</span>
                </div>
                <div className='review-text english'>Good application new experience thank you</div>
                <div className='review-text arabic'>Bonne application nouvelle expèrience merci</div>
              </div>
              <div className='translate show-arabic'>
                Translated from French <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>اشرف اشرف</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>Sat, 2:30 AM</span>
                </div>
                <div className='review-text english'>Identify who’s calling and has a nice name</div>
                <div className='review-text arabic'>يعرف من هو المتصل واسمه جميل</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>ابن الاكابر</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>Honestly, Amazing App, geetings to you. Excellent experience!</div>
                <div className='review-text arabic'>بصراحة برنامج رائع تحياتي لكم ممتازة عن تجربة</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>GBAAR ALKFAGY</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>Yesterday, 10:24 PM</span>
                </div>
                <div className='review-text english'>Thank you, Great application. I wish you success</div>
                <div className='review-text arabic'>شكرا لكم تطبيق روعه اتمنى لكم الموفقيه</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
            <div className='review d-none d-md-flex'>
              <div className='review-top'>
                <div className='stars'>
                  <img width='76' height='12' src={reviewStars} className='img-fluid lazyload' alt='review-stars' />
                </div>
                <div className='review-info'>
                  <p className='user'>الهامى مصطفى</p>
                  <span className='dot'>⸱</span>
                  <span className='date'>6/6, 4:56 PM</span>
                </div>
                <div className='review-text english'>Excellent, Highly recommend this app</div>
                <div className='review-text arabic'>ممتاز أنصح بهذا التطبيق رائع</div>
              </div>
              <div className='translate show-arabic'>
                Translated from Arabic <a href='/#'>Show Original</a>
              </div>
              <div className='translate show-english'>
                Original text <a href='/#'>Show Translation</a>
              </div>
            </div>
          </div>
          <button className='toggle-button p-2 d-md-none'>
            <span>show more</span>
          </button>
        </div>
      </section>

      <DownloadApp />
    </>
  );
};

export default Homepage;
