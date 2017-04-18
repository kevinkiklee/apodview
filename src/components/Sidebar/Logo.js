import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/nasa-logo.png';

const LogoWrapper = styled.section`
  height: 130px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 75px;
  }

  h1 {
    color: white;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 1px;
    margin-top: 15px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo}
           alt='APoD View Logo'/>
      <h1>APoD Viewer</h1>
    </LogoWrapper>
  );
};

export default Logo;
