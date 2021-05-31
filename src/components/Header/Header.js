import React from 'react';

import HeaderTextBox from './HeaderTextBox/HeaderTextBox';
import Navbar from './Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Submenu from './Submenu/Submenu';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <HeaderTextBox />
      <Sidebar />
      <Submenu />
    </header>
  );
};

export default Header;
