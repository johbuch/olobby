import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

import { MdSearch, MdNotifications } from 'react-icons/md';

// == Import scss
import './header.scss';

const Header = () => (
  <div className="header">
    <Navbar collapseOnSelect expand="lg">

      <div className="header__notifications">
        <span className="header__notifications__number">2</span>
        <MdNotifications />
      </div>

      <Navbar.Brand href="#home">O'Lobby</Navbar.Brand>

      <div className="header__profil--responsive">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <Image src="" roundedCircle />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Mon compte</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Se déconnecter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>

        <Form inline>
          <FormControl type="text" placeholder="Rechercher un jeux, un profil de joueur, une plateforme" className="mr-sm-2" />
          <Button> <MdSearch /> </Button>
        </Form>

        <div className="header__profil">
          <div className="header__profil__notifications">
            <span className="header__profil__notifications__number">2</span>
            <MdNotifications />
          </div>
          <Image src="" roundedCircle />
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Trevor
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mon compte</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Se déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
