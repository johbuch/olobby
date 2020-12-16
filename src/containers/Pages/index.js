import { connect } from 'react-redux';

import { fetchPlayers, fetchGames } from 'src/actions/players';

import pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
  // players: state.players.playersList.filter((player) => {
  //   return player.name === state.players.search
  // }),
  players: state.players.playersList,
  games: state.user.gamesList,
  platforms: state.user.platformsList,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchPlayers: () => {
    dispatch(fetchPlayers());
  },
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
  launchFetchPlatforms: () => {
    dispatch(fetchPlatforms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(pages);
