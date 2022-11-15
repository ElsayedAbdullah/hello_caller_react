import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className='contact-us'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p>Please fill out these fields and let us know how we can help?</p>
        </div>
      </div>

      <div className='contact-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-lg-9 col-xl-8 m-auto'>
              <div className='contact-form-content'>
                <form className='form-contact'>
                  <div className='form-group'>
                    <label htmlFor='reason'>Select a reason</label>
                    <select name='reason' id='reason'>
                      <option value='new-feature'>I’d like to request a new feature</option>
                      <option value='have-quesiton'>I have a question</option>
                      <option value='feedback'>I have feedback on the app</option>
                      <option value='not-working'>Something not working</option>
                      <option value='payment'>Payment</option>
                      <option value='else'>Something else</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Enter your name' required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='text' id='email' placeholder='Enter your email' required />
                    <p className='error'>
                      <svg className='mr-2' width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6.33301 8.99992H7.66634V10.3333H6.33301V8.99992ZM6.33301 3.66658H7.66634V7.66658H6.33301V3.66658ZM6.99301 0.333252C3.31301 0.333252 0.333008 3.31992 0.333008 6.99992C0.333008 10.6799 3.31301 13.6666 6.99301 13.6666C10.6797 13.6666 13.6663 10.6799 13.6663 6.99992C13.6663 3.31992 10.6797 0.333252 6.99301 0.333252ZM6.99967 12.3333C4.05301 12.3333 1.66634 9.94658 1.66634 6.99992C1.66634 4.05325 4.05301 1.66659 6.99967 1.66659C9.94634 1.66659 12.333 4.05325 12.333 6.99992C12.333 9.94658 9.94634 12.3333 6.99967 12.3333Z' fill='#C8102E' />
                      </svg>
                      Invalid Email
                    </p>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='msg'>Message</label>
                    <textarea name='msg' id='msg' placeholder='Enter your message here...' required></textarea>
                  </div>
                  <button type='submit' className='main-btn'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
