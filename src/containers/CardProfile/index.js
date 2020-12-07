import { connect } from 'react-redux';

import CatdProfile from 'src/components/CardProfile';

const mapStateToProps = (state) => ({
  players: state.players.playersList,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CatdProfile);
