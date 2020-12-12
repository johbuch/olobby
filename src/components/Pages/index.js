// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// == Import
import Annuaire from 'src/components/Annuaire';
import CardProfile from 'src/containers/CardProfile';

// == Import scss
import './pages.scss';

// == Composant
const Pages = ({ launchFetchPlayers, players }) => {
  useEffect(() => {
    launchFetchPlayers();
  }, []);
  return (
    <div className="pages">
      <Route
        path="/"
        exact
      >
        {players.map((player) => (
          <CardProfile />
        ))};
      </Route>
      <Route
        path="/annuaire-de-joueur"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de joueurs</h1>
        <CardProfile />
      </Route>
      <Route
        path="/annuaire-de-jeux"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de jeux</h1>
        <CardProfile />
      </Route>
      <Route
        path="/annuaire-de-plateformes"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de plateformes</h1>
        <CardProfile />
      </Route>
      <Route
        path="/mes-jeux"
      >
        <h1 className="title_pages2">Mes jeux</h1>
      </Route>
      <Route
        path="/mes-amis"
      >
        <h1 className="title_pages2">Mes amis</h1>
      </Route>
    </div>
)};

// == Export
export default Pages;
