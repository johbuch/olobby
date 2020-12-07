import { connect } from 'react-redux';

import { checkLogged } from 'src/actions/user';

import Olobby from 'src/components/Olobby';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Olobby);
