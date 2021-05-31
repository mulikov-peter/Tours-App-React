import React from 'react';
import { useGlobalContext } from '../../appContext';

import Loader from '../Loader/Loader';

import './About.css';

const About = () => {
  const { toursPopular, loading } = useGlobalContext();
  const images = toursPopular.map((tour, i) => (
    <img
      className={`gallery__photo gallery__photo-${i + 1}`}
      key={tour.id}
      src={tour.image}
      alt={tour.name}
    />
  ));

  return (
    <section className='section-about'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>awesome tours for everyone</h2>
      </div>
      <div className='about__content'>
        <div className='about__content-text'>
          <h3 className='heading-tertiary mb-sm'>
            We know how to make happy moments
          </h3>
          <p className='paragraph mb-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, dolore iste culpa cupiditate tempora quaerat sed rerum!
            Doloremque ratione sapiente qui, dolorem delectus suscipit
            consequuntur sequi minima incidunt consectetur fuga sunt
            voluptatibus nulla nostrum laudantium illum, quod neque repellendus
            libero rerum blanditiis!
          </p>
          <h3 className='heading-tertiary mb-sm'>People trust us their time</h3>
          <p className='paragraph'>
            Doloremque ratione sapiente qui, dolorem delectus suscipit
            consequuntur sequi sit amet consectetur, adipisicing elit. Nulla
            nostrum laudantium illum, quod neque repellendus libero rerum
            blanditiis. Aspernatur, dolore iste culpa cupiditate tempora quaerat
            sed rerum! Minima incidunt consectetur fuga sunt voluptatibus!
          </p>
        </div>

        <div className='about__content-gallery'>
          {loading ? <Loader /> : images}
        </div>
      </div>
    </section>
  );
};

export default About;
