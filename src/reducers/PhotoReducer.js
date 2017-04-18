import { RECEIVE_PHOTO_DATA } from '../actions/photoActions.js';

const initialState = {
  data: null,
};

const PhotoReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_PHOTO_DATA:
      return Object.assign({}, { data: action.photoData });

    default:
      return state;
  }
};

export default PhotoReducer;
