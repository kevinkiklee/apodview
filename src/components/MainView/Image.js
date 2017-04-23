import React, { Component } from 'react';
import { connect } from 'react-redux';

import ElementPan from 'react-element-pan';

class Image extends Component {
  handleImageLoad(e) {
  }

  render() {
    return (
      <ElementPan>
        <img id='photoImg'
             src={this.props.src}
             alt={this.props.alt}
             onLoad={this.handleImageLoad}/>;
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
