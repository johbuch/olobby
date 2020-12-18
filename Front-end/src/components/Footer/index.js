import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
              <Nav defaultActiveKey="none" className="flex-column">
                <NavLink className="nav-link" to="/qui-sommes-nous">Qui sommes nous ?</NavLink>
              </Nav>
            </Col>
          </Navbar>
        </Row>
      </Container>
      <hr />
      <div className="flex-column">
        <p className="col-sm copyright">
          O'Lobby | Tous droits réservés O'lobby &copy;{new Date().getFullYear()} 
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
