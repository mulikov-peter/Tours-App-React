import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useGlobalContext } from '../appContext';

import Loader from './Loader/Loader';
import Header from './Header/Header';
import About from './sections/About/About';
import TourList from './sections/Tours/TourList';
import Stories from './sections/Stories/Stories';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
// import TourModal from './TourModal/TourModal';

import './App.css';

const App = () => {
  const { loading } = useGlobalContext();
  return (
    <Router>
      <div className='container'>
        <Header />
        <About />
        {loading ? <Loader /> : <TourList />}
        {/* {isTourModalOpen ? <TourModal /> : null} */}
        <Stories />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
