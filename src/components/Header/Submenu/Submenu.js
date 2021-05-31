import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../../appContext';

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

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, i) => {
          const { label, url, icon } = link;
          return (
            <a key={i} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
