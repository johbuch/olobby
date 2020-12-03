import { UPDATE_USER_FIELD } from 'src/actions/user';

const initialState = {
  // ici l'état initial
  isLogged: false,
  password: '',
  email: 'maxime',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return { ...state };
  }
};

export default user;
