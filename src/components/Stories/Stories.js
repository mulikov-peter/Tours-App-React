import React from 'react';

import { useGlobalContext } from '../../appContext';

import UserStory from './UserStory';
import './Stories.css';

const Stories = () => {
  const { userComments } = useGlobalContext();

  const stories = userComments.map((user, i) => (
    <UserStory key={user.id} {...user} storyIndex={i} />
  ));

  return (
    <section className='section-stories'>
      <div className='center-text mb-lg'>
        <h2 className='heading-secondary'>People about us</h2>
      </div>
      <div className='stories slider'>{stories}</div>
      <button className='slider__btn slider__btn--left'>left</button>
      <button className='slider__btn slider__btn--right'>right</button>
      <div className='slider__dots'></div>
    </section>
  );
};

export default Stories;
