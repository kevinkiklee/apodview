import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/nasa-logo.png';

const LogoWrapper = styled.section`
  width: 300px;
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 75px;
  }

  h1 {
    color: white;
    margin-top: 15px;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo}
           alt='APoD View Logo'/>
      <h1>APoD View</h1>
    </LogoWrapper>
  );
};

export default Logo;
