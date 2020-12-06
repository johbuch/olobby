// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './devs.scss';

const Devs = () => (
  <div className="devs">
    <Container>
      <Row>
        <h1 className="devs__title">
          • Les Devs •
        </h1>
      </Row>
      <Row>
        <Col>
          <img
            className="devs__image1"
            alt="photodetristan"
            src="https://imagizer.imageshack.com/img924/176/UNamhl.jpg"
          />
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
      </Row>
    </Container>
  </div>
);

export default Devs;
