import React from 'react';

import spinner from '../../assets/loading.svg';

const Spinner = ({ url }) => {
  return (
    <div className='loading'>
      <img className='spinner'
           src={spinner}
           alt='Loading Spinner'/>
      Loading Image
    </div>
  );
};

export default Spinner;
