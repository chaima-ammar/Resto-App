import { combineReducers } from 'redux';
import carteReducer from './reducer';
import userReducer from './userReducer';
const allReducers = combineReducers({
  card : carteReducer,
  users : userReducer
});

export default allReducers;
