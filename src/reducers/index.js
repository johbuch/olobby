import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import playerReducer from './players';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'player'],
};

const rootReducer = combineReducers({
  user: userReducer,
  players: playerReducer,
});

export default persistReducer(persistConfig, rootReducer);
