// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/containers/Header';
import Aside from 'src/containers/Aside';
import Footer from 'src/containers/Footer';
import MenuFooter from 'src/components/MenuFooter';
import Login from 'src/containers/Login';
import Pages from 'src/containers/Pages';

import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

import Project from 'src/components/Project';
import Devs from 'src/components/Devs';
import MainTitle from '../MainTitle';

// == Composant
const Olobby = ({ isActive }) => {
  console.log('test');
  return (
    <div className="olobby">
      <Header />
      {isActive && (
        <>
          <Pages />
          <Aside />
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

      {/*<MainTitle />
      <Project />
      <Devs />*/}
    </div>
  );
};

Olobby.propTypes = {
  isActive: PropTypes.bool,
};
Olobby.defaultProps = {
  isActive: false,
};
// == Export
export default Olobby;
