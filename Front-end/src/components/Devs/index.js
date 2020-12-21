// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// == Import images
import corentin from 'src/assets/images/corentin.png';
import johan from 'src/assets/images/johan.jpeg';
import maxime from 'src/assets/images/max.jpg';
import stan from 'src/assets/images/stan.jpg';
import tristan from 'src/assets/images/tristan.jpeg';

// == Import scss
import './devs.scss';

const Devs = () => (
  <div className="devs">
    <Container>
      <Row>
        <Col sm md lg>
          <h1 className="devs__title">
            • Les Devs •
          </h1>
        </Col>
      </Row>
      <div className="devs__3devs">
        <Row>
          <Col sm md lg>
            <div className="img">
              <Image
                alt="photodetristan"
                src={tristan}
                roundedCircle
              />
            </div>
            <h2 className="devs__devname1">
              Tristan - Dev Front-end
            </h2>
            <p className="devs__devdescription1">
              Euuh ben moi, je joue pas aux jeux vidéos.
              Et alors, y’a un problème ? =)
            </p>
          </Col>
          <Col sm md lg>
            <div className="img">
              <Image
                alt="photodemaxime"
                src={maxime}
                roundedCircle
              />
            </div>
            <h2 className="devs__devname1">
              Maxime - Dev Front-end
            </h2>
            <p className="devs__devdescription1">
              Geek à mes heures perdus et passionné de
              développement. C'est dans la logique des choses
              que j'ai choisi ce projet.
            </p>
          </Col>
          <Col sm md lg>
            <div className="img">
              <Image
                alt="photodecorentin"
                src={corentin}
                roundedCircle
              />
            </div>
            <h2 className="devs__devname1">
              Corentin - Dev Front-end
            </h2>
            <p className="devs__devdescription1">
              De la Picardie jusqu’à Versailles, également skater et passionné de jeux vidéo,
              MMORPG/FPS dans le milieu compétitif,
              l’idée d’avoir une plateforme permettant de rassembler et de trouver des joueurs
              de niveau équivalent était un choix de projet évident pour moi !
            </p>
          </Col>
        </Row>
      </div>
      <div className="devs__2devs">
        <Row>
          <Col sm md lg>
            <div className="img">
              <Image
                alt="photodejohan"
                src={johan}
                roundedCircle
              />
            </div>
            <h2 className="devs__devname2">
              Johan - Dev Back-end
            </h2>
            <p className="devs__devdescription2">
              Un haut savoyard skater et passionné de jeux vidéos.
              C'est tout naturellement que je me suis tourné vers ce projet.
              Ah j'oubliais mon autre passion, le fromage.
              Peut être qu'un jour je créerai un matchmaking de reblochon ?
            </p>
          </Col>
          <Col sm md lg>
            <div className="img">
              <Image
                alt="photodestan"
                src={stan}
                roundedCircle
              />
            </div>
            <h2 className="devs__devname2">
              Stanislas - Dev Back-end
            </h2>
            <p className="devs__devdescription2">
              Passioné de jeux vidéos depuis l'enfance,
              j'ai voulu mettre à profit mon passage chez O'clock avec
              un projet qui permettait de répondre à une problématique
              des joueurs en réseaux, super fière du travail accompli avec l'équipe.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Devs;
