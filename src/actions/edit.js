export const UPDATE_EDIT_FIELD = 'UPDATE_EDIT_FIELD';
export const UPDATE_EDIT_CHECKBOX = 'UPDATE_EDIT_CHECKBOX';
export const UPDATE_EDIT_RADIO = 'UPDATE_EDIT_RADIO';
export const UPDATE_EDIT_IMAGE = 'UPDATE_EDIT_IMAGE';

export const SAVE_GAMES = 'SAVE_GAMES';
export const SAVE_PLATFORMS = 'SAVE_PLATFORMS';
export const SAVE_USER = 'SAVE_USER';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';
export const FETCH_USER = 'FETCH_USER';

export const EDIT_USER = 'EDIT_USER';

export const editField = (value, name) => ({
  type: UPDATE_EDIT_FIELD,
  value,
  name,
});

export const editCheckbox = (value) => ({
  type: UPDATE_EDIT_CHECKBOX,
  value,
});

export const editImage = (value) => ({
  type: UPDATE_EDIT_IMAGE,
  value,
});

export const editRadio = (value) => ({
  type: UPDATE_EDIT_RADIO,
  value,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const savePlatforms = (platforms) => ({
  type: SAVE_PLATFORMS,
  platforms,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchPlatforms = () => ({
  type: FETCH_PLATFORMS,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const editProfile = (user) => ({
  type: EDIT_USER,
  user,
});
