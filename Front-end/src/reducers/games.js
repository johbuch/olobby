import { SAVE_GAMES } from 'src/actions/players';

const initialState = {
  gamesList: [],
};

const games = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GAMES:
      return {
        ...state,
        gamesList: action.games,
      };

    default: return { ...state };
  }
};

export default games;
