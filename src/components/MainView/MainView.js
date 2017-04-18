import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import ElementPan from 'react-element-pan';

import { fetchPhotoData } from '../../actions/photoActions';

const MainViewWrapper = styled.section`
  max-width: calc(100% - 300px);
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;

  .element-pan {
    display: block;
    max-height: 100%;
  }

  .videoLink a {
    margin-top: 50px;
    color: white;
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
  }

  img {
    width: ${props => props.width};
  }
`;

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  isGreaterThan999px(widthString) {
    if (widthString === '') {
      return false;
    }

    const width = widthString.slice(0, widthString.length - 2);
    return width > 999;
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='loading'>Loading Image</div>
      );
    } else {
      const width = this.props.width;
      let url = this.props.photoData.url;

      if (this.props.photoData.media_type === 'image') {
        if (this.isGreaterThan999px(width)) {
          url = this.props.photoData.hdurl;
        }
      } else if (this.props.photoData.media_type === 'video') {
        content = <div className='videoLink'>
                    <a href={url} target='_blank'>External Video Link</a>
                  </div>;
      }
      
      let content = (
        <ElementPan width='100%'>
          <img id='photoImg' src={url}/>;
        </ElementPan>
      );

      return (
        <MainViewWrapper width={width}>
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
