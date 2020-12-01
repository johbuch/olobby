// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <HeaderHomeDisconnected />
  </div>
);

// == Export
export default Olobby;
