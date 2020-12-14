import { SAVE_PLAYERS, SAVE_MATCHMAKING, SAVE_MATCHMAKING_LEVEL } from 'src/actions/players';

const initialState = {
  playersList: [],
  matchList: [],
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
    case SAVE_MATCHMAKING:
      return {
        ...state,
        matchList: action.matchmaking,
      };
    case SAVE_MATCHMAKING_LEVEL:
      return {
        ...state,
        matchLevelList: action.matchmakingLevel,
      };
    default: return { ...state };
  }
};

export default players;
