export const ADD_FRIEND = 'ADD_FRIEND';

export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';

export const editAddFriend = (value) => ({
  type: ADD_FRIEND,
  value,
});

export const addFriendSuccess = (addFriend) => ({
  type: ADD_FRIEND_SUCCESS,
  addFriend,
});
