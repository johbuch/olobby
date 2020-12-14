export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});
