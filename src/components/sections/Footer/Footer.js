import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social'>
        <p className='paragraph'>pettergov1@gmail.com</p>
        <FaGithub />
        <FaLinkedinIn />
      </div>
    </footer>
  );
};

export default Footer;
