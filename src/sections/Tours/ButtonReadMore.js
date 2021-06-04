import React from 'react';

const ButtonReadMore = ({ readMore }) => {
  const handleToggleReadMore = () => !readMore;

  return (
    <button className='btn btn__read-more' onClick={handleToggleReadMore}>
      read more
    </button>
  );
};

export default ButtonReadMore;
