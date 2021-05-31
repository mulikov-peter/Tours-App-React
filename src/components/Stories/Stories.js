import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import { useGlobalContext } from '../../appContext';

import UserStory from './UserStory';
import './Stories.css';

const Stories = () => {
  const { userStories } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(prevIndex => {
      let index = prevIndex + 1;
      if (index > userStories.length - 1) index = 0;

      return index;
    });
  };

  const prevSlide = () => {
    setIndex(prevIndex => {
      let index = prevIndex - 1;
      if (index < 0) index = userStories.length - 1;

      return index;
    });
  };

  const stories = userStories.map((userStory, i) => {
    let position = 'slide';
    if (i === index) position = 'active-slide';

    if (i === index - 1 || (index === 0 && i === userStories.length - 1))
      position = 'prev-slide';

    return (
      <UserStory key={userStory.id} userStory={userStory} position={position} />
    );
  });

  return (
    <section className='section-stories'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>People about us</h2>
      </div>
      <div className='slider'>
        {stories}
        <div className='slider__dots'></div>
      </div>
      <button className='slider__btn slider__btn-prev' onClick={prevSlide}>
        <FaCaretLeft />
      </button>
      <button className='slider__btn slider__btn--next' onClick={nextSlide}>
        <FaCaretRight />
      </button>
    </section>
  );
};

export default Stories;
