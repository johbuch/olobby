// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import CardProfile from 'src/components/CardProfile';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <CardProfile />
  </div>
);

// == Export
export default Olobby;
