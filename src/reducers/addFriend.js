import {
  ADD_FRIEND,
  SAVE_FRIENDS,
  ACCEPT_FRIEND,
  REFUSE_FRIEND,
} from 'src/actions/addFriend';

const initialState = {
  // ici l'état initial
  friendReceiver: '',
  friendsList: [],
  idSender: '',
};

const addFriend = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friendReceiver: action.value,
      };
    case ACCEPT_FRIEND:
      return {
        ...state,
        idSender: action.value,
      };
    case REFUSE_FRIEND:
      return {
        ...state,
        idSender: action.value,
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
