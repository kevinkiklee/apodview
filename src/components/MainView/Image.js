import React, { Component } from 'react';
import { connect } from 'react-redux';

import ElementPan from 'react-element-pan';

import Spinner from './Spinner';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({ imageLoaded: false });
    }
  }

  handleImageLoad(e) {
    this.setState({ imageLoaded: true });
  }

  render() {
    let spinner = '';

    if (!this.state.imageLoaded) {
      spinner = <Spinner />;
    }

    return (
      <ElementPan>
        <img id='photoImg'
             src={this.props.src}
             alt={this.props.alt}
             onLoad={this.handleImageLoad}/>;
         { spinner }
      </ElementPan>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
