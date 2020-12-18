import React from 'react';

// == Import scss
import './headerhomedisconnected.scss';

const HeaderHomeDisconnected = () => (
  <div>
    <h2 className="header__title">
      Connecte toi à des gamers et deviens le #1
      <br />
      <span className="header__title__span">
        Avec O'Lobby trouve ton matchmaking
      </span>
    </h2>
    <header className="header">
      <img
        className="header__image"
        alt="Photoduheader"
        src="https://www.benq.com/content/dam/b2c/en-us/knowledge-center/gaming-vs-regular-monitor/gamingmonitorvsregular.png"
      />
    </header>
  </div>
);

export default HeaderHomeDisconnected;
