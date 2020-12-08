export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const SAVE_PLAYERS = 'SAVE_PLAYERS';
export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';
export const SAVE_PLATFORMS = 'SAVE_PLATFORMS';
export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';

export const fetchPlayers = () => ({
  type: FETCH_PLAYERS,
});

export const savePlayers = (players) => ({
  type: SAVE_PLAYERS,
  players,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const fetchPlatforms = () => ({
  type: FETCH_PLATFORMS,
});

export const savePlatforms = (platforms) => ({
  type: SAVE_PLATFORMS,
  platforms,
});