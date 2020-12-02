// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import Aside from 'src/components/Aside';
import Footer from 'src/components/Footer';



// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <Aside />
    <Footer />
  </div>
);

// == Export
export default Olobby;
