import { connect } from 'react-redux';

import Olobby from 'src/components/Olobby';

import { checkLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isActive: state.user.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Olobby);
