export const RECEIVE_DATE_REQUEST = 'RECEIVE_DATE_REQUEST';
export const RECEIVE_WIDTH_REQUEST = 'RECEIVE_WIDTH_REQUEST';

export const receiveDateRequest = (date) => ({
  type: RECEIVE_DATE_REQUEST,
  date
});

export const receiveWidthRequest = (width) => ({
  type: RECEIVE_WIDTH_REQUEST,
  width
});

export const setDateRequest = (date) => dispatch => {
  dispatch(receiveDateRequest(date));
};

export const setWidthRequest = (width) => dispatch => {
  dispatch(receiveWidthRequest(width));
};
