import { connect } from 'react-redux';

import { fetchPlayers, fetchMatchmaking } from 'src/actions/players';

import pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
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
  launchFetchMatchmaking: () => {
    dispatch(fetchMatchmaking());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(pages);
