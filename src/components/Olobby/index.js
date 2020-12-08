// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import

import Header from 'src/containers/Header';
import Aside from 'src/components/Aside';
import Footer from 'src/containers/Footer';
import MenuFooter from 'src/components/MenuFooter';
import CardProfile from 'src/containers/CardProfile';
import Login from 'src/components/Login';
import Pages from 'src/components/Pages';

import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

// == Composant

const Olobby = ({ isActive, checkLogged }) => {
  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <div className="olobby">
      <Header />
      {isActive && (
        <>
          <Aside />
          <Pages />
          <CardProfile />
          <MenuFooter />
        </>
      )}
      {!isActive && (
        <>
          <HeaderHomeDisconnected />
          <SectionHomeDisconnected />
        </>
      )}
      <Footer />
      <Login />
    </div>
  );
};

Olobby.propTypes = {
  isActive: PropTypes.bool,
  checkLogged: PropTypes.func.isRequired,
};
Olobby.defaultProps = {
  isActive: false,
};
// == Export
export default Olobby;
