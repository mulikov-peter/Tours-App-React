import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <section className='section-contact' id='contact'>
      <div className='contact-bg'>
        <div className='contact__form'>
          <form action='#' className='form'>
            <div className='center-text mb-md'>
              <h2 className='heading-secondary'>Contact us</h2>
            </div>
            <div className='form__group mb-md'>
              <input
                className='form__input'
                type='text'
                placeholder='Full name'
                id='name'
                required
              />
              <label htmlFor='name' className='form__label'>
                Full name
              </label>
            </div>
            <div className='form__group mb-md'>
              <input
                className='form__input'
                type='email'
                placeholder='Email address'
                id='email'
                required
              />
              <label htmlFor='email' className='form__label'>
                Email address
              </label>
            </div>
            <div className='form__group mb-md'>
              <textarea
                className='form__input'
                type='text'
                placeholder='Your message...'
                name='text'
                required
              />
            </div>
            <div className='form__group mb-md center-text'>
              <button className='btn btn-dark'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
