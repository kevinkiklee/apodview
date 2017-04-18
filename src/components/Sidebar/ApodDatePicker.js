import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import '../../styles/datepicker.css';

import { setDateRequest } from '../../actions/requestActions';

const DatePickerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .react-datepicker {
    background-color: black;
  }

  .react-datepicker__header {
    background-color: #111;
    color: white;
  }

  .react-datepicker__current-month {
    color: white;
    margin-bottom: 10px;
  }

  .react-datepicker__day,
  .react-datepicker__day-name, {
    color: white;
  }

  .react-datepicker__day--disabled {
    color: #353535;
  }
`;

class ApodDatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: moment(props.date),
    };

    this.minDate = moment('1995-06-16');
    this.maxDate = moment();
    this.excludeDates = [
      moment('1995-06-17'),
      moment('1995-06-18'),
      moment('1995-06-19'),
    ];

    this.selectDate = this.selectDate.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.date !== newProps.date) {
      this.setState({ selectedDate: moment(newProps.date)});
    }
  }

  selectDate(date) {
    const parsedDate = date.format('YYYY-MM-DD');
    this.props.setDateRequest(parsedDate);
  }

  render() {
    return (
      <DatePickerWrapper>
        <DatePicker
          inline
          fixedHeight
          selected={this.state.selectedDate}
          minDate={this.minDate}
          maxDate={this.maxDate}
          excludeDates={this.excludeDates}
          todayButton={"Today"}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onChange={this.selectDate} />
      </DatePickerWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  date: state.request.date,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setDateRequest: (date) => dispatch(setDateRequest(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApodDatePicker);
