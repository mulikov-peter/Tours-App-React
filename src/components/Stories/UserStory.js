import React from 'react';

const UserStory = ({ userStory, position }) => {
  const { name, picture, joke, location } = userStory;

  return (
    <article className={`story ${position}`}>
      <img
        src={picture.large}
        alt={name.first}
        className='story__user-img mb-sm'
      />
      <h2 className='story__caption mb-sm'>
        {name.first} {name.last}
      </h2>
      <h3 className='heading-tertiary mb-sm'>
        my favorite journey in {location.country}
      </h3>
      <p className='paragraph'>{joke}</p>
      {/* <FaQuoteRight className='icon' /> */}
    </article>

    // =========================
    // <div className={`story slide slide-${storyIndex + 1}`}>
    //   <figure className='story__shape'>
    //     <img src={picture.large} alt='' className='story__img' />
    //     <figcaption className='story__caption'>
    //       {name.first} {name.last}
    //     </figcaption>
    //   </figure>
    //   <div className='story__text'>
    //     <h3 className='heading-tertiary mb-sm'>
    //       my favorite journey in {location.country}
    //     </h3>
    //     <p>{joke}</p>
    //   </div>
    // </div>
  );
};

export default UserStory;
