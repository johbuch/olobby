export const ADD_FRIEND = 'ADD_FRIEND';

export const SAVE_ADD_FRIEND = 'SAVE_ADD_FRIEND';

export const editAddFriend = (value) => ({
  type: ADD_FRIEND,
  value,
});

export const saveUser = (addFriend) => ({
  type: SAVE_ADD_FRIEND,
  addFriend,
});
