import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../appContext';
import sublinks from '../../subLinksData';

import './Sidebar.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const sidebarLinks = sublinks.map((link, i) => {
    const { page, links } = link;

    return (
      <div className='sidebar__block' key={i}>
        <h4>{page}</h4>
        <div className='sidebar__sublinks'>
          {links?.map((linkItem, i) => {
            const { url, icon, label } = linkItem;
            return (
              <NavLink key={i} to={url}>
                {icon} {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-container show' : 'sidebar-container'
      }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar__links'>{sidebarLinks}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
