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
} from 'react-icons/md';
import { GiGameConsole } from 'react-icons/gi';

// == Import scss
import './aside.scss';

const Aside = ({
  launchFetchUser,
  user,
  launchListFriends,
  friends,
}) => {
  useEffect(() => {
    launchFetchUser();
    launchListFriends();
  }, []);
  return (
    <div className="aside">
      <Nav className="flex-column">
        <NavLink className="nav-item" to="/" activeClassName="nav-item-active" exact><MdHome />Accueil</NavLink>
        <NavLink className="nav-item" to="/annuaire-de-joueur" activeClassName="nav-item-active" exact><MdImportContacts />Liste des joueurs</NavLink>
        <NavLink className="nav-item" to="/annuaire-de-jeux" activeClassName="nav-item-active" ><MdGames />Liste des jeux</NavLink>
      </Nav>
      <div className="aside__friend">
        <h5 className="aside__friend__title">Mes Amis</h5>
        {Object.keys(friends).map((friend) => (
          <article className="aside__friend__profil" key={friends[friend].id}>
            <div className="img">
              <Image src={friends[friend].avatar} roundedCircle />
            </div>
            <div>
              <p className="aside__friend__profil__nickname">{friends[friend].pseudoPlatform}</p>
              {/*
                <a href="#!" className="aside__friend__profil__gamer"><MdPerson /></a>
                <a href="#!" className="aside__friend__profil__message"><MdMessage /></a>
              */}
            </div>
          </article>
        ))}
      </div>

      <div className="aside__game">
        <h5 className="aside__game__title">Mes jeux </h5>
        <div>
          {user.videogames.map((videogame) => (
            <article key={videogame.id} className="aside__game__img">
              <a key={videogame.id} href="#!">
                <Image src={videogame.image} key={videogame.id} rounded />
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
  launchListFriends: PropTypes.func.isRequired,
  friends: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Aside;
