export const UPDATE_EDIT_FIELD = 'UPDATE_EDIT_FIELD';
export const UPDATE_EDIT_CHECKBOX = 'UPDATE_EDIT_CHECKBOX';
export const UPDATE_EDIT_RADIO = 'UPDATE_EDIT_RADIO';
export const SAVE_GAMES = 'SAVE_GAMES';
export const SAVE_PLATFORMS = 'SAVE_PLATFORMS';
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';
export const UPDATE_EDIT_IMAGE = 'UPDATE_EDIT_IMAGE';

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

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchPlatforms = () => ({
  type: FETCH_PLATFORMS,
});

export const editProfile = (user) => ({
  type: EDIT_USER,
  user,
});
