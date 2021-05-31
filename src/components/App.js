import React from 'react';

import { useGlobalContext } from '../appContext';

import Loader from './Loader/Loader';
import Header from './Header/Header';
import About from './About/About';
import TourList from './Tours/TourList';
import TourModal from './TourModal/TourModal';
import Stories from './Stories/Stories';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

const App = () => {
  const { loading, isTourModalOpen } = useGlobalContext();
  return (
    <div className='container'>
      <Header />
      <About />
      {loading ? <Loader /> : <TourList />}
      {isTourModalOpen ? <TourModal /> : null}
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
