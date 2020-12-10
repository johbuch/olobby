import { connect } from 'react-redux';

import EditProfile from 'src/components/EditProfile';

import {
  editField,
  fetchGames,
  fetchPlatforms,
  editCheckbox,
} from 'src/actions/edit';

const mapStateToProps = (state) => ({
  email: state.edit.email,
  password: state.edit.password,
  pseudo: state.edit.pseudo,
  pseudoOlobbien: state.edit.pseudoOlobbien,
  description: state.edit.description,
  games: state.edit.gamesList,
  platforms: state.edit.platformsList,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(editField(newValue, name));
  },
  changeCheckbox: (newValue) => {
    dispatch(editCheckbox(newValue));
  },
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
  launchFetchPlatforms: () => {
    dispatch(fetchPlatforms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
