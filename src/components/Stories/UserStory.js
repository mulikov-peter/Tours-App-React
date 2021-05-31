const UserStory = ({ name, picture, location, joke, storyIndex }) => {
  return (
    <div className={`story-${storyIndex + 1}`}>
      <figure className='story__shape'>
        <img src={picture.large} alt='' className='story__img' />
        <figcaption className='story__caption'>
          {name.first} {name.last}
        </figcaption>
      </figure>
      <div className='story__text'>
        <h3 className='heading-tertiary mb-sm'>
          my favorite journey in {location.country}
        </h3>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default UserStory;
