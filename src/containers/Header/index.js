import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logOut } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isActive: state.user.isActive,
  pseudoOlobbien: state.user.pseudoOlobbien,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
