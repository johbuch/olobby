import { connect } from 'react-redux';

import Login from 'src/components/Login';

import {
  createUpdateUserFieldAction,
  logIn,
  fetchGames,
  fetchPlatforms,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  games: state.user.gamesList,
  platforms: state.user.platformsList,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUpdateUserFieldAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  launchFetchGames: () => {
    dispatch(fetchGames());
  },
  launchFetchPlatforms: () => {
    dispatch(fetchPlatforms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
