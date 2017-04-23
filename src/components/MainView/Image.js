import React, { Component } from 'react';
import ElementPan from 'react-element-pan';
import Spinner from './Spinner';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = { imageLoaded: false };

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
        { spinner }
        <img id='photoImg'
             src={this.props.src}
             alt={this.props.alt}
             onLoad={this.handleImageLoad}/>;
      </ElementPan>
    );
  }
}

export default Image;
