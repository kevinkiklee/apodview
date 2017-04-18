import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import MainView from './MainView/MainView';

import { fetchPhotoData } from '../actions/photoActions';

const ApodWrapper = styled.section`
  display: flex;
  font-family: 'Raleway';
  background-color: black;

  .loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    font-size: 30px;
  }
`;

class Apod extends Component {
  componentDidMount() {
    this.fetchPhoto(this.props.date);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.date !== newProps.date) {
      this.fetchPhoto(newProps.date);
    }
  }

  fetchPhoto(date) {
    this.props.fetchPhotoData({ date });
  }

  render() {
    if (!this.props.photoData) {
      return (
        <ApodWrapper>
          <div className='loading'>
            Loading APoD Viewer
          </div>
        </ApodWrapper>
      );
    } else {
      return (
        <ApodWrapper>
          <Sidebar/>
          <MainView/>
        </ApodWrapper>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  photoData: state.photo.data,
  date: state.request.date,
  width: state.request.width,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhotoData: (url) => dispatch(fetchPhotoData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apod);
