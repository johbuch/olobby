// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './maintitle.scss';

const MainTitle = () => (
  <div className="maintitle">
  <Container>
    <Row>
      <Col sm md lg>
        <h1 className="maintitle__title"> QUI SOMMES NOUS ?</h1>
      </Col>
    </Row>
  </Container>
  </div>
);

export default MainTitle;
