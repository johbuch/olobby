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
          <img src="https://imagizer.imageshack.com/img924/176/UNamhl.jpg" alt="photodetristan">
            <h2 className="devs__dev1">
            Tristan
            </h2>
          </img>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Devs;
