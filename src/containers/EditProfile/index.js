import { connect } from 'react-redux';

import EditProfile from 'src/components/EditProfile';

import {
  editField,
  fetchGames,
  fetchPlatforms,
  fetchUser,
  editCheckbox,
  editRadio,
  editImage,
  editProfile,
} from 'src/actions/edit';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudoPlatform: state.user.pseudoPlatform,
  pseudo: state.user.pseudo,
  description: state.user.description,
  games: state.user.gamesList,
  user: state.user.userInfo,
  platforms: state.user.platformsList,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(editField(newValue, name));
  },
  changeCheckbox: (newValue) => {
    dispatch(editCheckbox(newValue));
  },
  changeRadio: (newValue) => {
    dispatch(editRadio(newValue));
  },
  changeImage: (newValue) => {
    dispatch(editImage(newValue));
  },
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
  launchFetchPlatforms: () => {
    dispatch(fetchPlatforms());
  },
  launchFetchUser: () => {
    dispatch(fetchUser());
  },
  handleEdit: () => {
    dispatch(editProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
