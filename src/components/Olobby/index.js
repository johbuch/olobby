// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import

import Header from 'src/components/Header';
import Aside from 'src/components/Aside';
import Footer from 'src/components/Footer';
import MenuFooter from 'src/components/MenuFooter';
import CardProfile from 'src/components/CardProfile';
import Login from 'src/components/Login';

import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

// == Composant
const Olobby = () => (
  <div className="olobby">

    <Header />
    <Aside />
    <CardProfile />
    <Footer />
    <MenuFooter />
    <Login />
    {/*
    <HeaderHomeDisconnected />
    <SectionHomeDisconnected />*/}
  </div>
);

// == Export
export default Olobby;
