import React from 'react';
import { useGlobalContext } from '../../../appContext';

import './HeaderTextBox.css';

const HeaderTextBox = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className='header__text-box' onMouseOver={closeSubmenu}>
      <h1 className='heading-primary  heading-primary-main'>The Best Tours</h1>
      <p className='heading-primary-sub'>adventure is starting here</p>
      <a className='btn btn-dark' href='/#'>
        discover our tours
      </a>
    </div>
  );
};

export default HeaderTextBox;
