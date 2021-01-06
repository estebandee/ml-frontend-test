import { combineReducers } from 'redux';
import searchReducer from './search-reducer';
import detailsReducer from './details-reducer';

export default combineReducers({
  search: searchReducer,
  details: detailsReducer,
});
