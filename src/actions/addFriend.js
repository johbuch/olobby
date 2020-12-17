export const ADD_FRIEND = 'ADD_FRIEND';
export const ACCEPT_FRIEND = 'ACCEPT_FRIEND';
export const REFUSE_FRIEND = 'REFUSE_FRIEND';

export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ACCEPT_FRIEND_SUCCESS = 'ACCEPT_FRIEND_SUCCESS';
export const REFUSE_FRIEND_SUCCES = 'REFUSE_FRIEND_SUCCES';

export const SAVE_FRIENDS = 'SAVE_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const DISPLAY_FRIENDS = 'DISPLAY_FRIENDS';
export const LIST_FRIENDS = 'LIST_FRIENDS';

export const editAddFriend = (value) => ({
  type: ADD_FRIEND,
  value,
});

export const acceptFriend = (value) => ({
  type: ACCEPT_FRIEND,
  value,
});

export const refuseFriend = (value) => ({
  type: REFUSE_FRIEND,
  value,
});

export const addFriendSuccess = (friendReceiver) => ({
  type: ADD_FRIEND_SUCCESS,
  friendReceiver,
});

export const acceptFriendSuccess = (idSender) => ({
  type: ACCEPT_FRIEND_SUCCESS,
  idSender,
});

export const refuseFriendSuccess = (idSender) => ({
  type: REFUSE_FRIEND_SUCCES,
  idSender,
});

export const fetchFriends = () => ({
  type: FETCH_FRIENDS,
});

export const listFriends = () => ({
  type: LIST_FRIENDS,
});

export const saveFriends = (friends) => ({
  type: SAVE_FRIENDS,
  friends,
});

export const displayFriends = (friends) => ({
  type: DISPLAY_FRIENDS,
  friends,
});
