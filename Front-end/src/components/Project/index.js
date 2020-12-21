// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './project.scss';

const Project = () => (
  <div className="project">
    <Container>
      <Row>
        <Col sm md lg>
          <div className="maintitle">
            <h1 className="maintitle__title"> QUI SOMMES NOUS ?</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="project__title">• Le Projet •</h1>
          <p className="project__paragraph">
            En jouant depuis plusieurs années aux jeux vidéos en ligne,
            nous nous sommes rendu compte que la plupart des matchmaking étaient fait au hasard.
            Lorsque vous lancez une partie, vous êtes donc mis en relation avec
            des joueurs de tous niveaux, mais aussi avec des joueurs respectueux ou irrespectueux.
            Votre expérience de jeu peut donc varier totalement d'une partie à l'autre.
            Ce projet est né d'une volonté d'améliorer l'expérience des joueurs
            en ligne en suggérant des profils
            qui répondent aux critères du joueurs. L'utilisateur découvre
            de nouveaux joueurs qui peuvent devenir des amis mais surtout avec
            qui il peut jouer sereinement. Nous nous sommes donc retrouvé
            à 5 développeurs pleinement investi pour faire vivre ce projet.
          </p>
        </Col>
      </Row>
    </Container>
  </div>

);

export default Project;
