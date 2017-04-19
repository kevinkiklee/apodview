import React from 'react';
import styled from 'styled-components';

const InformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100vh - 512px);
  padding: 10px 25px 15px 25px;

  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  
  text-align: left;

  .title {
    width: 100%;
    padding: 15px 5px;
    margin-bottom: 10px;

    border-top: 1px solid white;
    border-bottom: 1px solid white;

    font-weight: 800;
  }

  .copyright {
    width: 100%;
    margin-top: 15px;
    text-align: left;

    font-size: 13px;
    font-weight: 600;
  }

  .explanation {
    overflow-y: auto;
    padding-right: 15px;

    font-size: 13px;
    line-height: 1.3;
  }
`;

const Information = ({ data }) => {
  const copyright = data.copyright ? `Photograph by ${data.copyright}` : '';
  return (
    <InformationWrapper>
      <h3 className='title'>{ data.title }</h3>
      <p className='explanation'>{ data.explanation }</p>
      <div className='copyright'>{ copyright }</div>
    </InformationWrapper>
  );
};

export default Information;
