import React, { useState } from 'react';
import { useGlobalContext } from '../../../appContext';

import Tour from './Tour';
import PopularTour from './PopularTour';

import './Tours.css';

const TourList = () => {
  const { tours, toursPopular } = useGlobalContext();
  const [isAllToursActive, setIsAllToursActive] = useState(false);

  const popularTours = toursPopular.map(popTour => (
    <PopularTour key={popTour.id} {...popTour} />
  ));

  const toggleAllTours = () => setIsAllToursActive(!isAllToursActive);

  const allTours = tours.map(tour => <Tour key={tour.id} {...tour} />);

  return (
    <section className='section-tours' id='tours'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>most popular tours</h2>
      </div>
      <div className='tours-popular mb-xl'>{popularTours}</div>
      <div className='center-text'>
        <button className='btn btn-dark' onClick={toggleAllTours}>
          {isAllToursActive ? ' Hide all tours' : 'All tours'}
        </button>
      </div>
      <div
        className={
          isAllToursActive
            ? 'tours-popular mt-xl'
            : 'tours-populartours-popular'
        }
      >
        {isAllToursActive ? allTours : null}
      </div>
    </section>
  );
};

export default TourList;
