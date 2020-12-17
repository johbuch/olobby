import { connect } from 'react-redux';

import Aside from 'src/components/Aside';

import {
  fetchUser,
} from 'src/actions/edit';

const mapStateToProps = (state) => ({
  user: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
