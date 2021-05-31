import React, { useState } from 'react';

const PopularTour = ({ name, image, info }) => {
  const [readMore, setReadMore] = useState(false);

  const infoText = info.substring(0, 250);
  const handleToggleReadMore = () => setReadMore(!readMore);

  return (
    <div className='card'>
      <img className='card__img' src={image} alt={name} />
      <h4 className='card__heading'>
        <span>{name}</span>
      </h4>
      <p className='card__info paragraph'>
        {readMore ? info : `${infoText}...`}{' '}
        <button className='btn__read-more' onClick={handleToggleReadMore}>
          {readMore ? 'read less' : 'read more'}
        </button>
      </p>
    </div>
  );
};

export default PopularTour;
