import { combineReducers } from 'redux';

import userReducer from './user';
import playerReducer from './players';
import editReducer from './edit';
import addFriendReducer from './addFriend';

const rootReducer = combineReducers({
  user: userReducer,
  players: playerReducer,
  edit: editReducer,
  addFriend: addFriendReducer,
});

export default rootReducer;
