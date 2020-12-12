export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const SAVE_PLAYERS = 'SAVE_PLAYERS';

export const FETCH_PLAYERS_MATCHMAKING = 'FETCH_PLAYERS_MATCHMAKING';

export const fetchPlayers = () => ({
  type: FETCH_PLAYERS,
});

export const fetchMatchmaking = () => ({
  type: FETCH_PLAYERS_MATCHMAKING,
});

export const savePlayers = (players) => ({
  type: SAVE_PLAYERS,
  players,
});
