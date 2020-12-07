import { combineReducers } from 'redux';
import { news } from './newsReducer';
import { loadingError } from './loadingErrorReducer';
import { activeItem } from './activeItemReducer';
import { loadingInProgress } from './loadingInProgressReducer';

export default combineReducers({
  news,
  loadingError,
  loadingInProgress,
  activeItem
});
