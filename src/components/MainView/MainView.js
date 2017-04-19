import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import ElementPan from 'react-element-pan';

const MainViewWrapper = styled.section`
  max-width: calc(100vw - 300px);
  height: 100vh;
  display: flex;
  overflow: hidden;

  margin: 0 auto;
  align-items: center;

  .element-pan {
    width: 100%;
    max-height: 100%;
    display: block;
  }

  .videoLink a {
    color: white;
    font-size: 30px;
    font-weight: 800;
    text-decoration: none;
  }

  img {
    width: ${props => props.width};
  }
`;

class MainView extends Component {
  isGreaterThan999px(width) {
    return width === '' ? false : width > 999;
  }

  buildImage(url, width) {
    if (this.isGreaterThan999px(width)) {
      url = this.props.photoData.hdurl;
    }

    return (
      <ElementPan>
        <img id='photoImg'
             src={url}
             alt={this.props.photoData.title}/>;
      </ElementPan>
    );
  }

  buildVideo(url) {
    return (
      <div className='videoLink'>
        <a href={url} target='_blank'>External Video Link</a>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='loading'>Loading Image</div>
      );
    } else {
      let content;
      const width = this.props.width;
      let url = this.props.photoData.url;

      if (this.props.photoData.media_type === 'image') {
        content = this.buildImage(url, width);
      } else if (this.props.photoData.media_type === 'video') {
        content = this.buildVideo(url);
      }

      return (
        <MainViewWrapper width={`${width}px`}>
          { content }
        </MainViewWrapper>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  photoData: state.photo.data,
  loading: state.loading.photoData,
  date: state.request.date,
  width: state.request.width,
});

export default connect(
  mapStateToProps,
  null
)(MainView);
