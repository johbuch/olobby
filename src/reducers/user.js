import {
  UPDATE_USER_FIELD,
  SAVE_USER_INFO,
  LOG_IN,
  LOG_OUT,
  SAVE_GAMES,
  SAVE_PLATFORMS,
  ADD_USER,
} from 'src/actions/user';

const initialState = {
  // ici l'état initial
  id: '',
  isActive: false,
  password: '',
  pseudo: '',
  passwordRegister: '',
  emailRegister: '',
  email: '',
  nickname: '',
  avatar: '',
  platformsList: [],
  gamesList: [],
  user: {},
  players: {},
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
    case LOG_OUT:
      return initialState;
    case SAVE_USER_INFO:
      return {
        ...state,
        id: action.id,
        isActive: action.isActive,
        pseudo: action.pseudo,
        avatar: action.avatar,
      };
    case ADD_USER:
      return {
        ...state,
        users: {
          ...state.user,
        },
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
