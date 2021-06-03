import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { JOKES_URL, TOURS_URL, USERS_URL } from './config';
import sublinks from './subLinksData';
import { margeArrayObj } from './helpers';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userStories, setUserStories] = useState([]);
  const [tours, setTours] = useState([]);
  const [toursPopular, setToursPopular] = useState([]);
  const [tourModal, setTourModal] = useState(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = Promise.all([
        axios.get(TOURS_URL),
        axios.get(USERS_URL),
        axios.get(JOKES_URL),
      ]);

      const data = await response;
      const { data: tours } = data[0];

      const {
        data: { results: users },
      } = data[1];
      const {
        data: { jokes },
      } = data[2];
      const toursPopular = tours.slice(0, 3);

      const userStory = margeArrayObj(users, jokes);

      setLoading(false);
      setTours(tours);
      setUserStories(userStory);
      setToursPopular(toursPopular);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Submenu
  const openSubmenu = (text, coords) => {
    const page = sublinks.find(link => link.page === text);

    setPage(page);
    setSubMenuLocation(coords);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => setIsSubmenuOpen(false);

  // Sidebar
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Tour modal window
  const openTourModal = id => {
    const tourModal = tours.filter(tour => tour.id === id);

    setIsTourModalOpen(true);
    setTourModal(...tourModal);
  };

  const closeTourModal = () => setIsTourModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        loading,
        userStories,
        tours,
        toursPopular,
        tourModal,
        isTourModalOpen,
        isSidebarOpen,
        isSubmenuOpen,
        subMenuLocation,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        openTourModal,
        closeTourModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
