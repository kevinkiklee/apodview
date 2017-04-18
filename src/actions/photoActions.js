import * as PhotoUtil from '../utils/PhotoUtil';

export const RECEIVE_PHOTO_DATA = 'RECEIVE_PHOTO_DATA';
export const START_LOADING_PHOTO_DATA = 'START_LOADING_PHOTO_DATA';

export const receivePhotoData = (photoData) => ({
  type: RECEIVE_PHOTO_DATA,
  photoData
});

export const startLoadingPhotoData = () => ({
  type: START_LOADING_PHOTO_DATA,
});

export const fetchPhotoData = (url) => dispatch => {
  dispatch(startLoadingPhotoData());
  return PhotoUtil.fetchPhotoData(url).then(
    (photoData) => dispatch(receivePhotoData(photoData))
  );
};
