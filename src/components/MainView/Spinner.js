import React from 'react';
import styled from 'styled-components';

import spinner from '../../assets/loading.svg';

const SpinnerWrapper = styled.section`
  width: calc(100vw - 301px) !important;
  height: 100% !important;

  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 301px;
  right: 0px;
  z-index: 5;

  background-color: black;
  color: white;

  img {
    width: 40px !important;
  }
`;

const Spinner = ({ url }) => {
  return (
    <SpinnerWrapper className='loading'>
      <img className='spinner'
           src={spinner}
           alt='Loading Spinner'/>
      Loading Image
    </SpinnerWrapper>
  );
};

export default Spinner;
