// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Annuaire from 'src/components/Annuaire';
import CardProfile from 'src/containers/CardProfile';
import EditProfile from 'src/containers/EditProfile';

// == Import Carousel
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// == Import scss
import './pages.scss';

// == Composant
const Pages = ({
  launchFetchMatchmaking,
  players,
  matchmaking,
  matchmakingLevel,
  launchFetchMatchmakingLevel,
}) => {
  useEffect(() => {
    launchFetchMatchmaking();
    launchFetchMatchmakingLevel();
  }, []);

  return (
    <div className="pages">
      <Route
        path="/"
        exact
      >
        <h4 className="pages__title--top">Ces personnes jouent au même jeux que vous</h4>
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
          {matchmaking.map((matchmakings) => (
            <CardProfile
              {...matchmakings}
              key={matchmakings.id}
            />
          ))}
        </Carousel>
        <h4 className="pages__title">Ces personnes ont le même niveau que vous</h4>
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
          {matchmakingLevel.map((matchmakingLevels) => (
            <CardProfile
              {...matchmakingLevels}
              key={matchmakingLevels.id}
            />
          ))}
        </Carousel>
      </Route>
      <Route
        path="/annuaire-de-joueur">
        <Annuaire />
        <h1 className="title_pages">Annuaire de joueurs</h1>
        {players.map((player) => (
          <CardProfile
            key={player.id}
            {...player}
          />
        ))}
      </Route>
      <Route
        path="/annuaire-de-jeux"
      >
        <Annuaire />
        <h1 className="pages__title">Annuaire de jeux</h1>
      </Route>

      <Route
        path="/annuaire-de-plateformes"
      >
        <Annuaire />
        <h1 className="pages__title">Annuaire de plateformes</h1>
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
      <Route
        path="/mon-compte"
      >
        <EditProfile />
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
  matchmaking: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  matchmakingLevel: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  launchFetchMatchmaking: PropTypes.func.isRequired,
  launchFetchMatchmakingLevel: PropTypes.func.isRequired,
};

// == Export
export default Pages;
