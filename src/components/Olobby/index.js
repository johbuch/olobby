// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import HeaderHomeDisconnected from 'src/components/HeaderHomeDisconnected';
import SectionHomeDisconnected from 'src/components/SectionHomeDisconnected';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <HeaderHomeDisconnected />
    <SectionHomeDisconnected />
  </div>
);

// == Export
export default Olobby;
