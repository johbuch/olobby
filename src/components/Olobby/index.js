// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import HomeDisconnected from 'src/components/HomeDisconnected';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <HomeDisconnected />
  </div>
);

// == Export
export default Olobby;
