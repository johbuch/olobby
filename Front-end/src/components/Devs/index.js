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
              Tristan
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
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
              Maxime
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
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
              Corentin
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
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
              Johan
            </h2>
            <p className="devs__devdescription2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.<br></br>
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.<br></br>
              Error, minus?
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
              Stanislas
            </h2>
            <p className="devs__devdescription2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.<br></br>
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.<br></br>
              Error, minus?
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Devs;
