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

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <Aside />
    <Footer />
    <MenuFooter />
    <CardProfile />
  </div>
);

// == Export
export default Olobby;
