import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../../appContext';

import './Submenu.css';

const Submenu = () => {
  const {
    isSubmenuOpen,
    subMenuLocation,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { positionCenter, positionBottom } = subMenuLocation;
    submenu.style.left = `${positionCenter}px`;
    submenu.style.top = `${positionBottom}px`;

    if (links.length === 3) setColumns('col-3');
    if (links.length === 4) setColumns('col-4');
    if (links.length === 5) setColumns('col-5');
  }, [subMenuLocation, links]);

  const submenuClass = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`;

  const submenuLinks = links.map((link, i) => {
    const { label, url, icon } = link;
    return (
      <NavLink key={i} to={url}>
        {icon} {label}
      </NavLink>
    );
  });

  return (
    <aside className={submenuClass} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>{submenuLinks}</div>
    </aside>
  );
};

export default Submenu;
