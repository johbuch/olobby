import React from 'react';

// == Import bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// == Import icons
import {
  MdHome,
  MdGames,
  MdImportContacts,
} from 'react-icons/md';
import { GiGameConsole } from 'react-icons/gi';

// == Import scss
import './menuFooter.scss';

const MenuFooter = () => (
  <div className="menu-footer">
    <Navbar expand="lg" variant="light" fixed="bottom">
      <Container>
        <Nav.Link href="/home">
          <MdHome />
          <p>Accueil</p>
        </Nav.Link>
        <Nav.Link href="#!">
          <MdImportContacts />
          <p>joueurs</p>
        </Nav.Link>
        <Nav.Link href="#!">
          <MdGames />
          <p>Jeux</p>
        </Nav.Link>
        <Nav.Link href="#!">
          <GiGameConsole />
          <p>plateformes</p>
        </Nav.Link>
      </Container>
    </Navbar>
  </div>
);

export default MenuFooter;
