import { RECEIVE_PHOTO_DATA,
         START_LOADING_PHOTO_DATA, } from '../actions/photoActions.js';

const initialState = {
  photoData: false,
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_PHOTO_DATA:
      return initialState;

    case START_LOADING_PHOTO_DATA:
      return Object.assign({}, state, { photoData: true });

    default:
      return state;
  }
};

export default LoadingReducer;
