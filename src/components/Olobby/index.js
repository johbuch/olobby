// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/containers/Header';
import Aside from 'src/components/Aside';
import Footer from 'src/components/Footer';
import MenuFooter from 'src/components/MenuFooter';
import CardProfile from 'src/components/CardProfile';

// == Composant
const Olobby = ({ checkLogged }) => {
  /*useEffect(() => {
    checkLogged();
  }, []);*/
  console.log('test');
  return (
    <div className="olobby">
      <Header />
      <Aside />
      <CardProfile />
      <Footer />
      <MenuFooter />
    </div>
  );
};

Olobby.propTypes = {
  checkLogged: PropTypes.func.isRequired,
};
// == Export
export default Olobby;
