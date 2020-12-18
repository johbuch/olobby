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
                  src='src/assets/carte.png'
                />
              </div>
            </Col>
            <Col sm md lg>
              <div className="section__text">
                <h1 className="section__title">Crée ton profil de gamer</h1>
                <ul className="section__paragraph">
                  <li>Ajoute la plateforme sur laquelle tu joues</li>
                  <li>Ajoute tes jeux</li>
                  <li>Précise ta fréquence de jeu, tu joues occasionnellement ou tu te considères comme un No-life assumé</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section__content2">
          <Row>
            <Col sm md lg>
              <div className="section__text">
                <h1 className="section__title">Rencontre tes futurs amis gamers</h1>
                <ul className="section__paragraph">
                  <li>Parcours les profils qui t’intéressent</li>
                  <li>Ajoute les en ami et pars jouer avec eux</li>
                </ul>
              </div>
            </Col>
            <Col sm md lg>
              <div className="section__img">
                <img
                  className="section__img__image1"
                  alt="imagesection2"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MXwxM[…]by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="section__content2">
          <Row>
            <Col sm md lg>
              <div className="section__img">
                <img
                  className="section__img__image1"
                  alt="imagesection2"
                  src="https://ak.picdn.net/shutterstock/videos/1020931030/thumb/1.jpg"
                />
              </div>
            </Col>
            <Col sm md lg>
              <div className="section__text">
                <h1 className="section__title">Matchmaking</h1>
                <ul className="section__paragraph">
                  <li>Suggestion de profil de gamers correspondant à tes critères</li>
                  <li>Fini les parties qui se passent mal avec des joueurs irrespectueux ou qui n’ont pas le même niveau que toi</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  </div>
);

export default SectionHomeDisconnected;
