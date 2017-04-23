import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  iframe {
    width: calc(100vw - 300px);
    height: 100vh;
  }
`;

const Video = ({ url }) => {
  return (
    <VideoWrapper>
      <iframe src={url}/>
    </VideoWrapper>
  );
};

export default Video;
