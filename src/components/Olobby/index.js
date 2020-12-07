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
import Pages from 'src/components/Pages';

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
  </div>
);

// == Export
export default Olobby;
