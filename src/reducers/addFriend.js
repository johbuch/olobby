import {
  ADD_FRIEND,
  SAVE_FRIENDS,
} from 'src/actions/addFriend';

const initialState = {
  // ici l'état initial
  friendReceiver: '',
  friendsList: [],
};

const addFriend = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        // checkbox: action.value,
        friendReceiver: action.value,
      // state.checkbox.push(action.value),
      };
    case SAVE_FRIENDS:
      return {
        ...state,
        friendsList: action.friends,
      };
    default:
      return { ...state };
  }
};

export default addFriend;
