/*
  root reducer with combination of all reducers.
*/
import { combineReducers } from 'redux';
import seasonReducer from './seasonreducer';
const rootReducer = combineReducers({
  seasonReducer
});
export default rootReducer;