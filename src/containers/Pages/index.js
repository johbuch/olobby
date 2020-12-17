import { connect } from 'react-redux';

import { fetchPlayers, fetchMatchmaking, fetchMatchmakingLevel, fetchGames } from 'src/actions/players';

import pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
  // players: state.players.playersList.filter((player) => {
  //   return player.name === state.players.search
  // }),
  players: state.players.playersList,
  matchmaking: state.players.matchList,
  matchmakingLevel: state.players.matchLevelList,
  games: state.user.gamesList,
  platforms: state.user.platformsList,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchPlayers: () => {
    dispatch(fetchPlayers());
  },
  launchFetchMatchmaking: () => {
    dispatch(fetchMatchmaking());
  },
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
  launchFetchMatchmakingLevel: () => {
    dispatch(fetchMatchmakingLevel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(pages);
