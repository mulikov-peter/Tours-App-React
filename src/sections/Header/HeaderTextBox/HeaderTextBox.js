import React from 'react';
import { Link } from 'react-scroll';
import { useGlobalContext } from '../../../appContext';

import './HeaderTextBox.css';

const HeaderTextBox = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className='header__text-box center' onMouseOver={closeSubmenu}>
      <h1 className='heading-primary  heading-primary-main'>The Best Tours</h1>
      <p className='heading-primary-sub'>adventure is starting here</p>
      <Link className='btn btn-dark' to='tours' spy={true} smooth={true}>
        discover our tours
      </Link>
    </div>
  );
};

export default HeaderTextBox;
