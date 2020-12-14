// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Annuaire from 'src/components/Annuaire';
import CardProfile from 'src/containers/CardProfile';

// == Import Carousel
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// == Import scss
import './pages.scss';

// == Composant
const Pages = ({ launchFetchMatchmaking, Dots, players }) => {
  useEffect(() => {
    launchFetchMatchmaking();
  }, []);

  return (
    <div className="pages">
      <Route
        path="/"
        exact
      >
        <Carousel
          plugins={[
            'arrows',
            {
              // resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {players.map((player) => (
            <CardProfile
              {...player}
              key={player.id}
            />
          ))}
        </Carousel>
      </Route>
      <Route
        path="/annuaire-de-joueur"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de joueurs</h1>
      </Route>
      <Route
        path="/annuaire-de-jeux"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de jeux</h1>
      </Route>
      <Route
        path="/annuaire-de-plateformes"
      >
        <Annuaire />
        <h1 className="title_pages">Annuaire de plateformes</h1>
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
  );
};

Pages.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  launchFetchMatchmaking: PropTypes.func.isRequired,
};

// == Export
export default Pages;
