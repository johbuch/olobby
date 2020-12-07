import {
  UPDATE_USER_FIELD,
  SAVE_USER_INFO,
  LOG_IN,
  SAVE_GAMES,
  SAVE_PLATFORMS,
} from 'src/actions/user';

const initialState = {
  // ici l'état initial
  isLogged: false,
  password: '',
  pseudo: '',
  email: '',
  nickname: '',
  avatar: '',
  platformsList: [],
  gamesList: [],
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
    case SAVE_GAMES:
      return {
        ...state,
        gamesList: action.games,
      };
    case SAVE_PLATFORMS:
      return {
        ...state,
        platformsList: action.platforms,
      };
    default:
      return { ...state };
  }
};

export default user;
