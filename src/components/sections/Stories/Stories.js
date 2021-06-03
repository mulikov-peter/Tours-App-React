import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import { useGlobalContext } from '../../../appContext';

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

  const goToSlide = (i = 0) => setIndex(i);

  const stories = userStories.map((userStory, i) => {
    let position = 'slide';
    if (i === index) position = 'active-slide';

    if (i === index - 1 || (index === 0 && i === userStories.length - 1))
      position = 'prev-slide';

    return (
      <UserStory key={userStory.id} userStory={userStory} position={position} />
    );
  });

  const dots = userStories.map((_, i) => {
    let activeClass = '';
    if (i === index) activeClass = 'active-dot';
    return (
      <button
        onClick={() => goToSlide(i)}
        key={i}
        className={`slider__dots__dot ${activeClass}`}
        data-slide={i}
      ></button>
    );
  });

  return (
    <section className='section-stories' id='stories'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>People about us</h2>
      </div>
      <div className='slider'>
        {stories}
        <button className='slider__btn slider__btn-prev' onClick={prevSlide}>
          <FaCaretLeft />
        </button>
        <button className='slider__btn slider__btn-next' onClick={nextSlide}>
          <FaCaretRight />
        </button>
        <div className='slider__dots'>{dots}</div>
      </div>
    </section>
  );
};

export default Stories;
