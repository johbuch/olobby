export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const createUpdateUserFieldAction = (value, name) => ({
  type: UPDATE_USER_FIELD,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserInfo = (isLogged, nickname) => ({
  type: SAVE_USER_INFO,
  isLogged,
  nickname,
});
