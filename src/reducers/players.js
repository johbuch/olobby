import { SAVE_PLAYERS } from 'src/actions/players';

const initialState = {
  playersList: [],
  platformsList: [],
  gamesList: [],
};

const players = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYERS:
      return {
        ...state,
        playersList: action.players,
      };

    default: return { ...state };
  }
};

export default players;
