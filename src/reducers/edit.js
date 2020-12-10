import {
  UPDATE_EDIT_FIELD,
  SAVE_GAMES,
  SAVE_PLATFORMS,
  UPDATE_EDIT_CHECKBOX,
  UPDATE_EDIT_RADIO,
  UPDATE_EDIT_IMAGE,
  EDIT_USER,
} from 'src/actions/edit';

const initialState = {
  // ici l'état initial
  password: '',
  pseudo: '',
  pseudoOlobbien: '',
  email: '',
  description: '',
  platformsList: [],
  gamesList: [],
  checkbox: [],
  radio: '',
  urlImage: '',
};

const edit = (state = initialState, action = {}) => {
  switch (action.type) {
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
        urlImage: action.value,
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
    default:
      return { ...state };
  }
};

export default edit;
