import { connect } from 'react-redux';

import { fetchGames } from 'src/actions/players';

import CardGames from 'src/components/CardProfile';

const mapStateToProps = (state) => ({
  games: state.user.gamesList,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardGames);
