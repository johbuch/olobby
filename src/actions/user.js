export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SAVE_EDIT_USER = 'SAVE_EDIT_USER';

export const ADD_USER = 'ADD_USER';

export const createUpdateUserFieldAction = (value, name) => ({
  type: UPDATE_USER_FIELD,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const saveUserInfo = (id, isActive, pseudo, avatar) => ({
  type: SAVE_USER_INFO,
  id,
  isActive,
  pseudo,
  avatar,
});

export const saveUserEdit = (
  id,
  isActive,
  pseudo,
  avatar,
  email,
  level,
  description,
  pseudoPlatform,
  radio,
  checkbox,
) => ({
  type: SAVE_EDIT_USER,
  id,
  isActive,
  pseudo,
  avatar,
  email,
  level,
  description,
  pseudoPlatform,
  radio,
  checkbox,
});

export const addProfile = (user) => ({
  type: ADD_USER,
  user,
});
