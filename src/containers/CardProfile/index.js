import { connect } from 'react-redux';

import { fetchPlayers } from 'src/actions/players';

import CardProfile from 'src/components/CardProfile';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProfile);
