import React, { Component } from 'react';
import styled from 'styled-components';

const WidthTextInputWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px 0px 6px 0px
  color: white;

  form {
    display: flex;
  }

  h4 {
    margin-right: 10px;
  }

  input[type='text'] {
    width: 65px;
  }

  input[type='submit'] {
    background-color: #aaccff;
    border: 1px solid #aaccff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  input[type='submit']:hover {
    background-color: #88bbff;
    transition: all 0.3s ease 0s;
  }
`;

class WidthTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: props.width,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.width !== newProps.width) {
      this.setState({ width: newProps.width });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setWidthRequest(this.state.width);
  }

  handleChange(e) {
    this.setState({ width: `${e.target.value}` });
  }

  render() {
    return (
      <WidthTextInputWrapper>
        <h4>Set Width</h4>
        <form onSubmit={this.handleSubmit}>
            <input placeholder="In pixels"
                   type="text"
                   pattern="\d+"
                   maxLength='5'
                   value={this.state.width}
                   onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </WidthTextInputWrapper>
    );
  }
}

export default WidthTextInput;
