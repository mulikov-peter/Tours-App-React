import React from 'react';

import HeaderTextBox from './HeaderTextBox/HeaderTextBox';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Submenu from '../../components/Submenu/Submenu';

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
