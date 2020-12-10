import {
  UPDATE_EDIT_FIELD,
  SAVE_GAMES,
  SAVE_PLATFORMS,
  UPDATE_EDIT_CHECKBOX,
} from 'src/actions/edit';

const initialState = {
  // ici l'état initial
  password: '',
  pseudo: '',
  pseudoOlobbien: '',
  email: '',
  nickname: '',
  avatar: '',
  description: '',
  platformsList: [],
  gamesList: [],
  checkbox: [],
};

const edit = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EDIT_FIELD:
      return {
        ...state,
        ...action.value,
      };
    case UPDATE_EDIT_CHECKBOX:
      console.log(action.value);
      return {
        ...state,
        // checkbox: action.value,
        checkbox: [...state.checkbox, action.value],
      // state.checkbox.push(action.value),
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

export default edit;
