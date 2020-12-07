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
import Login from 'src/components/Login';
import Pages from 'src/components/Pages';

import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

// == Composant

const Olobby = () => (
  <div className="olobby">

    <Header />
    <Aside />
    <Pages />
    <CardProfile />
    <Footer />
    <MenuFooter />
    <Login />
    {/*
    <HeaderHomeDisconnected />
    <SectionHomeDisconnected />*/}
  </div>
);


Olobby.propTypes = {
  //checkLogged: PropTypes.func.isRequired,
};
// == Export
export default Olobby;
