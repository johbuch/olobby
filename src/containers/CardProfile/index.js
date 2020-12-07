import { connect } from 'react-redux';

import { fetchPlayers } from 'src/actions/players';

import CardProfile from 'src/components/CardProfile';

const mapStateToProps = (state) => ({
  players: state.players.playersList,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchPlayers: () => {
    dispatch(fetchPlayers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProfile);
