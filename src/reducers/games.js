import { SAVE_GAMES } from 'src/actions/games';

const initialState = {
  gamesList: [],
};

const games = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GAMES:
      return {
        ...state,
        gamesList: action.players,
      };

    default: return { ...state };
  }
};

export default games;
