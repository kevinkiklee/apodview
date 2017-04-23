import React from 'react';

const Video = ({ url }) => {
  return (
    <div className='videoLink'>
      <a href={url} target='_blank'>External Video Link</a>
    </div>
  );
};

export default Video;
