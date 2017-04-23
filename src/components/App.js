import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import MainView from './MainView/MainView';
import spinner from '../assets/loading.svg';

import { fetchPhotoData } from '../actions/photoActions';

const AppWrapper = styled.section`
  display: flex;
  background-color: black;
  font-family: 'Raleway';

  .loading {
    width: 100vw;
    height: 100vh;
    background-color: black;
  }
`;

class App extends Component {
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
        <AppWrapper>
          <div className='loading' />
        </AppWrapper>
      );
    } else {
      return (
        <AppWrapper>
          <Sidebar/>
          <MainView/>
        </AppWrapper>
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
)(App);
