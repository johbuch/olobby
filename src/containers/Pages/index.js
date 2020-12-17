import { connect } from 'react-redux';


import { fetchPlayers, fetchMatchmaking, fetchMatchmakingLevel } from 'src/actions/players';

import pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
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
  launchFetchMatchmakingLevel: () => {
    dispatch(fetchMatchmakingLevel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(pages);
