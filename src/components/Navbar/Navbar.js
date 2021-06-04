import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { FaBars, FaSpa } from 'react-icons/fa';
import { useGlobalContext } from '../../appContext';
import './Navbar.css';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleDisplaySubmenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const positionCenter = (tempBtn.left + tempBtn.right) / 2;
    const positionBottom = tempBtn.bottom - 3;

    openSubmenu(page, { positionCenter, positionBottom });
  };

  const handleCloseSubmenu = e => {
    if (!e.target.classList.contains('nav__link-sub')) closeSubmenu();
  };

  return (
    <nav className='nav' onMouseOver={handleCloseSubmenu}>
      <div className='nav-center'>
        <div className='nav__header'>
          <FaSpa className='nav__logo' />
          <button className='toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <button
              className='nav__link nav__link-sub'
              onMouseOver={handleDisplaySubmenu}
            >
              company
            </button>
          </li>
          <li className='nav__item'>
            <button
              className='nav__link nav__link-sub'
              onMouseOver={handleDisplaySubmenu}
            >
              tours
            </button>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='stories' spy={true} smooth={true}>
              stories
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='contact' spy={true} smooth={true}>
              contact
            </Link>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' to='/cart'>
              cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
