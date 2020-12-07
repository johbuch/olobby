import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './footer.scss';

const Footer = ({ isLogged }) => {
  const cssClass = classNames('footer', {
    'footer-disconnected': !isLogged,
  });
  return (
    <div className={cssClass}>
      <Container>
        <Row>
          <Navbar expand="lg">
            <Col sm md lg>
              <Nav className="flex-column">
                <Nav.Link href="/home">Conditions générales d'utilisation</Nav.Link>
                <Nav.Link href="/home">Cookies</Nav.Link>
                <Nav.Link href="/home">Politique de confidentialité</Nav.Link>
                <br />
                <br />
              </Nav>
            </Col>
            <Col sm md lg>
              <Nav defaultActiveKey="none" className="flex-column">
                <Nav.Link href="/home">Plan du site</Nav.Link>
                <Nav.Link href="">Qui sommes nous ?</Nav.Link>
                <Nav.Link href="">Nous contacter</Nav.Link>
                <br />
                <br />
              </Nav>
            </Col>
            <Col sm md lg>
              <Nav className="flex-column">
                <Nav.Link href="">Annuaire de Joueur</Nav.Link>
                <Nav.Link href="" >Annuaire de Jeux</Nav.Link>
                <Nav.Link href="" >Annuaire de Plateforme</Nav.Link>
                <br />
                <br />
              </Nav>
            </Col>
            <Col sm md lg>
              <Nav defaultActiveKey="none" className="flex-column">
                <Nav.Link href="">Mes Jeux</Nav.Link>
                <Nav.Link href="">Mes Amis</Nav.Link>
                <br />
                <br />
                <br />
              </Nav>
            </Col>
          </Navbar>
        </Row>
      </Container>
      <hr />
      <div className="flex-column">
        <p className="col-sm copyright">
          O'Lobby | Tous droits réservé O'lobby &copy;{new Date().getFullYear()} 
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  isLogged: PropTypes.bool,
};
Footer.defaultProps = {
  isLogged: false,
};
export default Footer;
