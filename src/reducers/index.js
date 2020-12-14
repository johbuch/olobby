import { combineReducers } from 'redux';

import userReducer from './user';
import playerReducer from './players';
import editReducer from './edit';

const rootReducer = combineReducers({
  user: userReducer,
  players: playerReducer,
  edit: editReducer,
});

export default rootReducer;
