export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const SAVE_PLAYERS = 'SAVE_PLAYERS';

export const fetchPlayers = () => ({
  type: FETCH_PLAYERS,
});

export const savePlayers = (players) => ({
  type: SAVE_PLAYERS,
  players,
});
