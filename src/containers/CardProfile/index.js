import { connect } from 'react-redux';

import { fetchPlayers, fetchMatchmaking } from 'src/actions/players';

import CardProfile from 'src/components/CardProfile';

const mapStateToProps = (state) => ({
  players: state.players.playersList,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchPlayers: () => {
    dispatch(fetchPlayers());
  },

  launchFetchMatchmaking: () => {
    dispatch(fetchMatchmaking());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProfile);
