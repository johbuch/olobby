import {
  ADD_FRIEND,
} from 'src/actions/addFriend';

const initialState = {
  // ici l'état initial
  friendReceiver: [],
  status: 'false',
};

const addFriend = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FRIEND:
      if (state.friendReceiver.includes(action.value)) {
        const index = state.friendReceiver.indexOf(action.value);
        if (index > -1) {
          console.log(state.friendReceiver.splice(index, 1));
          state.friendReceiver.splice(index, 1);
          return {
            ...state,
          };
        }
      } else {
        return {
          ...state,
          // checkbox: action.value,
          friendReceiver: [...state.friendReceiver, action.value],
        // state.checkbox.push(action.value),
        };
      }
      break;
    default:
      return { ...state };
  }
};

export default addFriend;
