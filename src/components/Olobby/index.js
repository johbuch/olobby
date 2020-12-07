// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import Project from 'src/components/Project';
import Devs from 'src/components/Devs';
import MainTitle from '../MainTitle';

// == Composant
const Olobby = () => (
  <div className="olobby">
    <Header />
    <MainTitle />
    <Project />
    <Devs />
  </div>
);

// == Export
export default Olobby;
