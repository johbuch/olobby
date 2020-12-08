import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';

import Login from 'src/containers/Login';

import {
  MdSearch,
  MdNotifications,
  MdPerson,
  MdMessage,
} from 'react-icons/md';
import { FaPlaystation } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

// == Import scss
import './header.scss';

const Header = ({ isLogged, handleLogout, nickname, avatar }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="header">
      {isLogged && (
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">

        <div className="header__notifications">
          <span className="header__notifications__number">2</span>
          <MdNotifications />
        </div>

        <Navbar.Brand href="#home">O'Lobby</Navbar.Brand>

        <div className="header__profil--responsive">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="img">
                <Image src={avatar} roundedCircle />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mes amis</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Mes jeux</Dropdown.Item>
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
            <div className="img">
              <Image src={avatar} roundedCircle />
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {nickname}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Mon compte</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="header__friend">
            <h5 className="header__friend__title">Mes 3 premiers Amis ajoutés</h5>
            <div className="test">
              <article className="header__friend__profil">
                <div className="img">
                  <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
                </div>
                <div>
                  <p className="header__friend__profil__nickname">Dhôko</p>
                  <a href="#!" className="header__friend__profil__gamer"><MdPerson /></a>
                  <a href="#!" className="header__friend__profil__message"><MdMessage /></a>
                </div>
              </article>
              <article className="header__friend__profil">
                <div className="img">
                  <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
                </div>
                <div>
                  <p className="header__friend__profil__nickname">Dhôko</p>
                  <a href="#!" className="header__friend__profil__gamer"><MdPerson /></a>
                  <a href="#!" className="header__friend__profil__message"><MdMessage /></a>
                </div>
              </article>
              <article className="header__friend__profil">
                <div className="img">
                  <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
                </div>
                <div>
                  <p className="header__friend__profil__nickname">Dhôko</p>
                  <a href="#!" className="header__friend__profil__gamer"><MdPerson /></a>
                  <a href="#!" className="header__friend__profil__message"><MdMessage /></a>
                </div>
              </article>
            </div>

            <div className="header__game">
              <h5 className="header__game__title">Mes derniers jeux ajoutés</h5>
              <div>
                <article className="header__game__img">
                  <a href="#!">
                    <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
                  </a>
                </article>
                <article className="header__game__img">
                  <a href="#!">
                    <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
                  </a>
                </article>
                <article className="header__game__img">
                  <a href="#!">
                    <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
                  </a>
                </article>
                <article className="header__game__img">
                  <a href="#!">
                    <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
                  </a>
                </article>
              </div>
            </div>

            <div className="header__console">
              <h5 className="header__console__title">Mes plateformes</h5>
              <a href="#!" className="header__console__link">
                <FaPlaystation />
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      )}
      {!isLogged && (
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#home">O'Lobby</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => setModalShow(true)} className="btn__login"><BiLogInCircle />S'identifier</Button>
        </Navbar.Collapse>
      </Navbar>
      )}
      <Login modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isLogged: false,
};
export default Header;
