import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import Login from 'src/containers/Login';

import {
  MdSearch,
  MdPersonAdd,
  MdPerson,
  MdMessage,
  MdClose,
} from 'react-icons/md';
import { FaPlaystation } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { GiOctopus } from 'react-icons/gi';

// == Import scss
import './header.scss';

const Header = ({
  isActive,
  handleLogout,
  pseudo,
  avatar,
  launchFetchFriends,
  friends,
  acceptFriend,
  refuseFriend,
}) => {
  const [show, setShow] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const ref = React.useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    launchFetchFriends();
  }, []);
  return (
    <div className="header">
      {isActive && (
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">

        <div className="header__notifications">
          <span className="header__notifications__number">2</span>
          <MdPersonAdd />
        </div>

        <Navbar.Brand href="#home"><Image src="src/assets/logo.png" /></Navbar.Brand>

        <div className="header__profil--responsive">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="img">
                <Image src={avatar} roundedCircle />
              </div>
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
            <div ref={ref}>
              <Button className="header__profil__notifications" onClick={handleClick}><MdPersonAdd /></Button>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Title as="h3">Mes demandes d'amis</Popover.Title>
                  <Popover.Content>
                    {friends.map((friend) => (
                      <div key={friend.sender.id} className="friend">
                        <div key={friend.sender.id} className="profile__friend">
                          <div key={friend.sender.id} className="profile__friend__img">
                            <Image
                              src={friend.sender.avatar}
                              key={friend.sender.id}
                              roundedCircle
                            />
                          </div>
                          <p className="profile__friend__nickname">{friend.sender.pseudoPlatform}</p>
                        </div>
                        <Button
                          className="accept"
                          data-val={friend.id}
                          onClick={(evt) => {
                            acceptFriend(evt.currentTarget.dataset.val);
                          }}
                        >
                          <GiOctopus />
                        </Button>
                        <Button
                          className="refuse"
                          data-val={friend.id}
                          onClick={(evt) => {
                            refuseFriend(evt.currentTarget.dataset.val);
                          }}
                        >
                          <MdClose />
                        </Button>
                      </div>
                    ))}
                  </Popover.Content>
                </Popover>
              </Overlay>
            </div>
            <div className="img">
              <Image src={avatar} roundedCircle />
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {pseudo}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavLink className="dropdown-item" to="/mon-compte">Mon compte</NavLink>
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
      {!isActive && (
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#home"><Image src="/Front-end/src/assets/logo.png" /></Navbar.Brand>
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
  isActive: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  launchFetchFriends: PropTypes.func.isRequired,
  acceptFriend: PropTypes.func.isRequired,
  refuseFriend: PropTypes.func.isRequired,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudoPlatform: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  ),
};

Header.defaultProps = {
  isActive: false,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      pseudoPlatform: '',
      avatar: '',
    }).isRequired,
  ).isRequired,
};

export default Header;
