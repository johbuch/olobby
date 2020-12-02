import React from 'react';

// == Import Bootstrap
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

// == Import Icons
import {
  MdHome,
  MdGames,
  MdImportContacts,
  MdVideogameAsset,
  MdSupervisorAccount,
  MdPerson,
  MdMessage,
} from 'react-icons/md';
import { GiGameConsole } from 'react-icons/gi';
import { FaPlaystation } from "react-icons/fa";

// == Import scss
import './aside.scss';

const Aside = () => (
  <div className="aside">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home"><MdHome />Accueil</Nav.Link>
      <Nav.Link eventKey="link-1"><MdImportContacts />Annuaire de joueurs</Nav.Link>
      <Nav.Link eventKey="link-2"><MdGames />Annuaire de jeux</Nav.Link>
      <Nav.Link eventKey="link-2"><GiGameConsole />Annuaire de plateformes</Nav.Link>
      <Nav.Link eventKey="link-2"><MdVideogameAsset />Mes jeux</Nav.Link>
      <Nav.Link eventKey="link-2"><MdSupervisorAccount />Mes amis</Nav.Link>
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
      <h5 className="aside__game__title">Mes derniers jeux ajoutés</h5>
      <div>
        <article className="aside__game__img">
          <a href="#!">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
          </a>
        </article>
        <article className="aside__game__img">
          <a href="#!">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
          </a>
        </article>
        <article className="aside__game__img">
          <a href="#!">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
          </a>
        </article>
        <article className="aside__game__img">
          <a href="#!">
            <Image src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/10/fifa20-afp.png" rounded />
          </a>
        </article>
      </div>
    </div>

    <div className="aside__console">
      <h5 className="aside__console__title">Mes plateformes</h5>
      <a href="#!" className="aside__console__link">
        <FaPlaystation />
      </a>
    </div>
  </div>
);

export default Aside;
