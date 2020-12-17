import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './sectionhomedisconnected.scss';

const SectionHomeDisconnected = () => (
  <div>
    <section className="section">
      <Container>
        <div className="section__content1">
          <Row>
            <Col sm md lg>
              <div className="section__img">
                <img
                  className="section__img__image1"
                  alt="imagesection1"
                  src="https://img.huffingtonpost.com/asset/5cf512a3250000310adbe3b0.jpeg?ops=scalefit_960_noupscale"
                />
              </div>
            </Col>
            <Col sm md lg>
              <div className="section__text">
                <h1 className="section__title">O'Lobby, c'est quoi ?</h1>
                <p className="section__paragraph"> O’Lobby est un réseau social destiné aux joueurs avec peu de relation ou cherchant une meilleure expérience de jeu en trouvant des joueurs qui correspondent à leurs critères. Le joueur pourra se constituer un carnet de profils de joueur plus rapidement qu’en les trouvant seulement en partie et dans son entourage proche.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section__content2">
          <Row>
            <Col sm md lg>
              <div className="section__text">
                <h1 className="section__title">Pourquoi O'Lobby ?</h1>
                <p className="section__paragraph">
                  Le matchmaking des jeux vidéos (Fortnite, COD, Apex Legends, GTA...)
                  en réseau sur les plateformes Playstation, Xbox, PC peut gâcher
                  l’expérience des utilisateurs de ces jeux et ils ressortent de sessions
                  de parties déçus du comportement des autres participants (abandon en
                  cours de jeu, incivisme, non-collaboration), regrettent la
                  non-équivalence de niveau, sans oublier la barrière de la langue.
                  <br></br>
                  <br></br>
                  O'Lobby permet donc d'améliorer
                  l’expérience de jeu des joueurs de jeux vidéo en ligne
                  et aux joueurs d'étendre leur réseau de joueurs.
                </p>
              </div>
            </Col>
            <Col sm md lg>
              <div className="section__img">
                <img
                  className="section__img__image1"
                  alt="imagesection2"
                  src="https://ak.picdn.net/shutterstock/videos/1020931030/thumb/1.jpg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  </div>
);

export default SectionHomeDisconnected;
