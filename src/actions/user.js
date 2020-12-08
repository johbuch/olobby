export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const CHECK_LOGGED = 'CHECK_LOGGED';

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

export const saveUserInfo = (isLogged, nickname, avatar) => ({
  type: SAVE_USER_INFO,
  isLogged,
  nickname,
  avatar,
});
