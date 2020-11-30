import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Container>
      <Row>
        <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </Col>
        </Navbar>
      </Row>

    </Container>
  </div>

  /*
      <div className="row">
        column 1
        <div className="col-md-3 col-sm-6">
          <ul className="list-unstyled">
            <li><a>Conditions générales d'utilisation</a></li>
            <li><a>Mention légales</a></li>
            <li><a>Plan du site</a></li>
            <li><a>Cookies</a></li>
          </ul>
        </div>
          column 2
        <div className="col-md-3 col-sm-6">
          <ul className="list-unstyled">
            <li><a>Qui sommes nous ?</a></li>
            <li><a>Nous contacter</a></li>
          </ul>
        </div>
          Social
        <div className="col-md-3 col-sm-6">
          <ul className="list-unstyled">
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>
            <li><a>Youtube</a></li>
            <li><a>Twitch</a></li>
          </ul>
  </div> */
);

export default Footer;
