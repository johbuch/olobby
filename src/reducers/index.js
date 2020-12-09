import { combineReducers } from 'redux';

import userReducer from './user';
import playerReducer from './players';

const rootReducer = combineReducers({
  user: userReducer,
  players: playerReducer,
});

export default rootReducer;
