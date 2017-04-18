import moment from 'moment';

import { RECEIVE_DATE_REQUEST,
         RECEIVE_WIDTH_REQUEST } from '../actions/requestActions.js';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  width: '',
};

const RequestReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_DATE_REQUEST:
      return Object.assign({}, initialState, { date: action.date });

    case RECEIVE_WIDTH_REQUEST:
      return Object.assign({}, state, { width: action.width });

    default:
      return state;
  }
};

export default RequestReducer;
