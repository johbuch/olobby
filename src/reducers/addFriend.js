import {
} from 'src/actions/edit';

const initialState = {
  // ici l'état initial
  addFriend: [],
};

const addFriend = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default addFriend;
