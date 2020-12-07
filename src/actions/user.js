export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';
export const SAVE_PLATFORMS = 'SAVE_PLATFORMS';
export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';

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

export const saveUserInfo = (isLogged, token, nickname, avatar) => ({
  type: SAVE_USER_INFO,
  isLogged,
  token,
  nickname,
  avatar,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const fetchPlatforms = () => ({
  type: FETCH_PLATFORMS,
});

export const savePlatforms = (platforms) => ({
  type: SAVE_PLATFORMS,
  platforms,
});
