import React from 'react';

const Tour = ({ id, name, image, openTourModal }) => {
  return (
    <article className='tour'>
      <img src={image} alt='tour' onClick={() => openTourModal(id)} />
      <h2>{name}</h2>
    </article>
  );
};

export default Tour;
