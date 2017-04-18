import { combineReducers } from 'redux';

import PhotoReducer from './PhotoReducer';
import LoadingReducer from './LoadingReducer';
import RequestReducer from './RequestReducer';

const RootReducer = combineReducers({
  photo: PhotoReducer,
  loading: LoadingReducer,
  request: RequestReducer,
});

export default RootReducer;
