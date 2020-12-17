import { connect } from 'react-redux';

import Aside from 'src/components/Aside';

import {
  fetchUser,
} from 'src/actions/edit';

import {
  listFriends,
} from 'src/actions/addFriend';

const mapStateToProps = (state) => ({
  user: state.user.userInfo,
  friends: state.addFriend.friends,
});

const mapDispatchToProps = (dispatch) => ({
  launchFetchUser: () => {
    dispatch(fetchUser());
  },
  launchListFriends: () => {
    dispatch(listFriends());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
