import { UPDATE_USER_FIELD, SAVE_USER_INFO, LOG_IN } from 'src/actions/user';

const initialState = {
  // ici l'état initial
  isLogged: true,
  password: '',
  email: '',
  nickname: '',
  avatar: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOG_IN:
      return {
        ...state,
        users: {
          ...state.user,
        },
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        isLogged: action.isLogged,
        nickname: action.nickname,
        avatar: action.avatar,
      };
    default:
      return { ...state };
  }
};

export default user;
