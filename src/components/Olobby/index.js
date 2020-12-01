// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import MenuFooter from 'src/components/MenuFooter';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <MenuFooter />
  </div>
);

// == Export
export default Olobby;
