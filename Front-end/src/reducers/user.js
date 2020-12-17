import {
  UPDATE_USER_FIELD,
  SAVE_USER_INFO,
  LOG_IN,
  LOG_OUT,
  ADD_USER,
} from 'src/actions/user';

import {
  UPDATE_EDIT_FIELD,
  SAVE_GAMES,
  SAVE_PLATFORMS,
  UPDATE_EDIT_CHECKBOX,
  UPDATE_EDIT_RADIO,
  UPDATE_EDIT_IMAGE,
  EDIT_USER,
  SAVE_USER,
} from 'src/actions/edit';

const initialState = {
  // ici l'état initial
  id: '',
  isActive: false,
  password: '',
  pseudo: '',
  email: '',
  avatar: '',
  platformsList: [],
  gamesList: [],
  userInfo: {
    videogames: [],
    platform: [],
  },
  players: {},
  pseudoPlatform: '',
  description: '',
  checkbox: [],
  radio: [],
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
    case UPDATE_EDIT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_EDIT_RADIO:
      return {
        ...state,
        radio: action.value,
      };
    case UPDATE_EDIT_IMAGE:
      return {
        ...state,
        avatar: action.value,
      };
    case EDIT_USER:
      return {
        ...state,
        users: {
          ...state.user,
        },
      };
    case UPDATE_EDIT_CHECKBOX:
      if (state.checkbox.includes(action.value)) {
        const index = state.checkbox.indexOf(action.value);
        if (index > -1) {
          console.log(state.checkbox.splice(index, 1));
          state.checkbox.splice(index, 1);
          return {
            ...state,
          };
        }
      } else {
        return {
          ...state,
          // checkbox: action.value,
          checkbox: [...state.checkbox, action.value],
        // state.checkbox.push(action.value),
        };
      }
      break;
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
    case SAVE_USER:
      return {
        ...state,
        userInfo: action.user,
      };
    default:
      return { ...state };
  }
};

export default user;
