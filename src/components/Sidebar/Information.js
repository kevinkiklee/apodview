import React from 'react';
import styled from 'styled-components';

const InformationWrapper = styled.section`
  height: calc(100vh - 512px);
  padding: 10px 25px 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: left;

  .title {
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    font-weight: 800;
    padding: 15px 5px;
    margin-bottom: 10px;
  }

  .copyright {
    font-weight: 600;
    text-align: left;
    font-size: 13px;
    width: 100%;
    margin-top: 15px;
  }

  .explanation {
    font-size: 13px;
    line-height: 1.3;
    overflow-y: auto;
    padding-right: 15px;
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
