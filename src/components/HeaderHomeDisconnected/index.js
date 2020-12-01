import React from 'react';

// == Import scss
import './headerhomedisconnected.scss';

const HeaderHomeDisconnected = () => (
  <div>
    <header className="header">
      <h1 className="header__title">Bienvenu sur O'Lobby</h1>
      <img
        className="header__image"
        alt="Photoduheader"
        src="https://w.wallhaven.cc/full/m9/wallhaven-m9q6e9.jpg"
      />
    </header>
  </div>
);

export default HeaderHomeDisconnected;
