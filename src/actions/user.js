export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';

export const createUpdateUserFieldAction = (value, name) => ({
  type: UPDATE_USER_FIELD,
  value,
  name,
});
