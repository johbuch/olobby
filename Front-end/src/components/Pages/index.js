// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import CardGames from 'src/components/CardGames';
import CardProfile from 'src/containers/CardProfile';
import EditProfile from 'src/containers/EditProfile';
import Project from 'src/components/Project';
import Devs from 'src/components/Devs';
import MainTitle from '../MainTitle';

// == Import Carousel
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// == Import Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// == Import scss
import './pages.scss';

// == Composant
const Pages = ({
  launchFetchMatchmaking,
  players,
  matchmaking,
  matchmakingLevel,
  launchFetchMatchmakingLevel,
  launchFetchPlayers,
  games,
  launchFetchGames,
}) => {
  useEffect(() => {

  });
  useEffect(() => {
    launchFetchMatchmaking();
    launchFetchMatchmakingLevel();
    launchFetchPlayers();
    launchFetchGames();
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
        <h4 className="title">Ces personnes ont le même niveau que vous</h4>
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
        <Container>
          <h4 className="pages__title">Annuaire de joueurs</h4>
          <Row>
            {players.map((player) => (
              <CardProfile
                key={player.id}
                {...player}
              />
            ))}
          </Row>
        </Container>
      </Route>
      <Route
        path="/annuaire-de-jeux"
      >
        <h4 className="pages__title">Annuaire de jeux</h4>
        <Container>
          <Row>
            {games.map((game) => (
              <CardGames key={game.id} {...game} />
            ))}
          </Row>
        </Container>
      </Route>

      <Route
        path="/annuaire-de-plateformes"
      >
        <h4 className="pages__title">Annuaire de plateformes</h4>

      </Route>
      <Route
        path="/mes-jeux"
      >
        <h4 className="title_pages2">Mes jeux</h4>
      </Route>
      <Route
        path="/mes-amis"
      >
        <h4 className="title_pages2">Mes amis</h4>
      </Route>
      <Route
        path="/mon-compte"
      >
        <EditProfile />
      </Route>
      <Route
        path="/qui-sommes-nous"
      >
        <MainTitle />
        <Project />
        <Devs />
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
  games: PropTypes.arrayOf(
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
  launchFetchPlayers: PropTypes.func.isRequired,
  launchFetchGames: PropTypes.func.isRequired,
};

// == Export
export default Pages;
