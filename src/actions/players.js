export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const SAVE_PLAYERS = 'SAVE_PLAYERS';

export const SAVE_MATCHMAKING = 'SAVE_MATCHMAKING';
export const SAVE_MATCHMAKING_LEVEL = 'SAVE_MATCHMAKING_LEVEL';

export const FETCH_PLAYERS_MATCHMAKING = 'FETCH_PLAYERS_MATCHMAKING';
export const FETCH_LEVELS_MATCHMAKING = 'FETCH_LEVELS_MATCHMAKING';

export const fetchPlayers = () => ({
  type: FETCH_PLAYERS,
});

export const fetchMatchmaking = () => ({
  type: FETCH_PLAYERS_MATCHMAKING,
});

export const fetchMatchmakingLevel = () => ({
  type: FETCH_LEVELS_MATCHMAKING,
});

export const savePlayers = (players) => ({
  type: SAVE_PLAYERS,
  players,
});

export const saveMatchMaking = (matchmaking) => ({
  type: SAVE_MATCHMAKING,
  matchmaking,
});

export const saveMatchMakingLevel = (matchmakingLevel) => ({
  type: SAVE_MATCHMAKING_LEVEL,
  matchmakingLevel,
});
