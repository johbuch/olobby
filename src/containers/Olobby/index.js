import { connect } from 'react-redux';

import Olobby from 'src/components/Olobby';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Olobby);
