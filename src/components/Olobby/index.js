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
<<<<<<< HEAD
import Login from 'src/containers/Login';
import Pages from 'src/components/Pages';
=======
import Login from 'src/components/Login';
import Pages from 'src/containers/Pages';
>>>>>>> origin/dev-front-annuaireJoueurs

import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

// == Composant

<<<<<<< HEAD
const Olobby = ({ isActive }) => {
  console.log('test');
  return (
    <div className="olobby">
      <Header />
      {isActive && (
        <>
          <Aside />
          <Pages />
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
=======
const Olobby = ({ isLogged }) => (
  <div className="olobby">
    <Header />
    {isLogged && (
      <>
        <Aside />
        <Pages />
        <MenuFooter />
      </>
    )}
    {!isLogged && (
      <>
        <HeaderHomeDisconnected />
        <SectionHomeDisconnected />
      </>
    )}
    <Footer />
    <Login />
  </div>
);
>>>>>>> origin/dev-front-annuaireJoueurs

Olobby.propTypes = {
  isActive: PropTypes.bool,
};
Olobby.defaultProps = {
  isActive: false,
};
// == Export
export default Olobby;
