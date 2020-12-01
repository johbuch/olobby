// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import Login from 'src/components/Login';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <Login />
  </div>
);

// == Export
export default Olobby;
