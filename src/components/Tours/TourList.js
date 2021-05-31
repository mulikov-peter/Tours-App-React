import React from 'react';
import { useGlobalContext } from '../../appContext';

import PopularTour from './PopularTour';

import './Tours.css';

const TourList = () => {
  const { toursPopular } = useGlobalContext();

  const popularTours = toursPopular.map(popTour => (
    <PopularTour key={popTour.id} {...popTour} />
  ));

  return (
    <section className='section-tours'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>most popular tours</h2>
      </div>
      <div className='tours-popular mb-xl'>{popularTours}</div>
      <div className='center-text'>
        <a className='btn btn-dark' href='/#'>
          All tours
        </a>
      </div>
    </section>
  );
};

export default TourList;
