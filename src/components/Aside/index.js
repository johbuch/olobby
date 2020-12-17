import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import Bootstrap
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

// == Import Icons
import {
  MdHome,
  MdGames,
  MdImportContacts,
  MdPerson,
  MdMessage,
} from 'react-icons/md';
import { GiGameConsole } from 'react-icons/gi';
import { FaPlaystation } from 'react-icons/fa';

// == Import scss
import './aside.scss';

const Aside = ({ launchFetchUser, user }) => {
  useEffect(() => {
    launchFetchUser();
  }, []);
  return (
    <div className="aside">
      <Nav className="flex-column">
        <NavLink className="nav-item" to="/" activeClassName="nav-item-active" exact><MdHome />Accueil</NavLink>
        <NavLink className="nav-item" to="/annuaire-de-joueur" activeClassName="nav-item-active" exact><MdImportContacts />Annuaire de joueurs</NavLink>
        <NavLink className="nav-item" to="/annuaire-de-jeux" activeClassName="nav-item-active" ><MdGames />Annuaire de jeux</NavLink>
        <NavLink className="nav-item" to="/annuaire-de-plateformes" activeClassName="nav-item-active" ><GiGameConsole />Annuaire de plateformes</NavLink>
      </Nav>

      <div className="aside__friend">
        <h5 className="aside__friend__title">Mes 3 premiers Amis ajoutés</h5>
        <article className="aside__friend__profil">
          <div className="img">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
          </div>
          <div>
            <p className="aside__friend__profil__nickname">Dhôko</p>
            <a href="#!" className="aside__friend__profil__gamer"><MdPerson /></a>
            <a href="#!" className="aside__friend__profil__message"><MdMessage /></a>
          </div>
        </article>
        <article className="aside__friend__profil">
          <div className="img">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
          </div>
          <div>
            <p className="aside__friend__profil__nickname">Dhôko</p>
            <a href="#!" className="aside__friend__profil__gamer"><MdPerson /></a>
            <a href="#!" className="aside__friend__profil__message"><MdMessage /></a>
          </div>
        </article>
        <article className="aside__friend__profil">
          <div className="img">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" roundedCircle />
          </div>
          <div>
            <p className="aside__friend__profil__nickname">Dhôko</p>
            <a href="#!" className="aside__friend__profil__gamer"><MdPerson /></a>
            <a href="#!" className="aside__friend__profil__message"><MdMessage /></a>
          </div>
        </article>
      </div>

      <div className="aside__game">
        <h5 className="aside__game__title">Mes jeux </h5>
        <div>
          {user.videogames.map((videogame) => (
            <article className="aside__game__img">
              <a href="#!">
                <Image src={videogame.image} rounded />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="aside__console">
        <h5 className="aside__console__title">Ma plateforme</h5>
        <a href="#!" className="aside__console__link">
          <div className="aside__console__link__image">
            <Image src={user.platform.image} rounded />
          </div>
        </a>
      </div>
    </div>
  );
};

Aside.propTypes = {
  launchFetchUser: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      platform: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      videogames: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Aside;
