import {
  ADD_FRIEND,
} from 'src/actions/addFriend';

const initialState = {
  // ici l'état initial
  friendReceiver: '',
  status: 'false',
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
    default:
      return { ...state };
  }
};

export default addFriend;
