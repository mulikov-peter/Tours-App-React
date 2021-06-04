import React from 'react';

const Tour = ({ id, name, image }) => {
  return (
    <article className='card'>
      <img className='card__img' src={image} alt='tour' />
      <h4 className='card__heading'>
        <span>{name}</span>
      </h4>
    </article>
  );
};

export default Tour;
