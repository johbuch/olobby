export const ADD_FRIEND = 'ADD_FRIEND';

export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';

export const SAVE_FRIENDS = 'SAVE_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const editAddFriend = (value) => ({
  type: ADD_FRIEND,
  value,
});

export const addFriendSuccess = (friendReceiver) => ({
  type: ADD_FRIEND_SUCCESS,
  friendReceiver,
});

export const fetchFriends = () => ({
  type: FETCH_FRIENDS,
});

export const saveFriends = (friends) => ({
  type: SAVE_FRIENDS,
  friends,
});
