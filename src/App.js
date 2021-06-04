import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useGlobalContext } from './appContext';

// import components
import Loader from './components/Loader/Loader';
// import sections
import Header from './sections/Header/Header';
import About from './sections/About/About';
import TourList from './sections/Tours/TourList';
import Stories from './sections/Stories/Stories';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

// import pages
import AboutPage from './pages/pages_company/AboutPage';
import CarriersPage from './pages/pages_company/CarriersPage';
import PartnersPage from './pages/pages_company/PartnersPage';
import SeaTours from './pages/pages_tours/SeaTours';
import MountainsTours from './pages/pages_tours/MountainsTours';
import AgriturismoTours from './pages/pages_tours/AgriturismoTours';
import StoriesPage from './pages/page_stories/StoriesPage';
import ContactPage from './pages/page_contact/ContactPage';

import './App.css';

const App = () => {
  const { loading } = useGlobalContext();
  return (
    <Router>
      <div className='container'>
        <Header />
        <About />
        {loading ? <Loader /> : <TourList />}
        <Stories />
        <Contact />
        <Footer />
        <>
          <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/carries' component={CarriersPage} />
            <Route path='/partners' component={PartnersPage} />

            <Route path='/sea rest' component={SeaTours} />
            <Route path='/mountains' component={MountainsTours} />
            <Route path='/agriturismo' component={AgriturismoTours} />

            <Route path='/stories' component={StoriesPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </>
      </div>
    </Router>
  );
};

export default App;
