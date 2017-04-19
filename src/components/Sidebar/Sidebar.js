import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Logo from './Logo';
import ApodDatePicker from './ApodDatePicker';
import WidthTextInput from './WidthTextInput';
import Information from './Information';

import { setWidthRequest } from '../../actions/requestActions';

const SidebarWrapper = styled.section`
  width: 300px;
  height: 100vh;
  border-right: 1px solid white;

  h4 {
    font-weight: 800;
    color: white;
  }

  input[type='text'] {
    text-align: center;
  }
`;

class Sidebar extends Component {
  render() {
    let information = <Information data={this.props.data} />;

    if (this.photoDataLoading) {
      information = 'Loading...';
    }

    return (
      <SidebarWrapper>
        <Logo/>
        <ApodDatePicker/>
        <WidthTextInput width={this.props.width}
                        setWidthRequest={this.props.setWidthRequest}/>
        { information }
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.photo.data,
  width: state.request.width,
  photoDataLoading: state.loading.photoData,
});

const mapDispatchToProps = (dispatch) => ({
  setWidthRequest: (width) => dispatch(setWidthRequest(width)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
