import React, { useState } from 'react';
import { useGlobalContext } from '../../appContext';

const TourModal = () => {
  const { tourModal, closeTourModal } = useGlobalContext();
  const [readMore, setReadMore] = useState(false);

  const handleToggleReadMore = () => setReadMore(!readMore);

  return (
    <div className='modal'>
      <button onClick={closeTourModal}>X</button>
      <article className='modal__tour'>
        <img src={tourModal.image} alt='tour' />
        <footer>
          <div className='tour__info'>
            <h4>{tourModal.name}</h4>
            <h4>Price: {tourModal.price} $</h4>
          </div>
          <p>
            {readMore
              ? tourModal.info
              : `${tourModal.info.substring(0, 200)}...`}
            <button
              className='btn btn__read-more'
              onClick={handleToggleReadMore}
            >
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
        </footer>
      </article>
    </div>
  );
};

export default TourModal;
