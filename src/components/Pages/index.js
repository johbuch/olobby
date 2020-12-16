// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// == Import
import Annuaire from 'src/components/Annuaire';
import CardProfile from 'src/components/CardProfile';
import CardGames from 'src/components/CardGames';

// == Import Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// == Import scss
import './pages.scss';

// == Composant
const Pages = ({ launchFetchPlayers, launchFetchGames, players, games }) => {
    useEffect(() => {
        launchFetchPlayers();
        launchFetchGames();
      }, []);

    
return (    
  <div className="pages">
    <Route
        path="/">
    </Route>
    <Route
        path="/annuaire-de-joueur">
        <h1 className="title_pages">Annuaire de joueurs</h1>
        <Container className="cards_container">
            <Row>
                {players.map((player) => (            
                    <CardProfile key={player.id} {...player}/>
                ))}
            </Row>
        </Container>
    </Route>
    <Route
        path="/annuaire-de-jeux">
        <h1 className="title_pages">Annuaire de jeux</h1>
        <Container>
            <Row>
                {games.map((game) => (            
                    <CardGames key={game.id} {...game}/>
                ))}
            </Row>
        </Container>
    </Route>  
    <Route
        path="/annuaire-de-plateformes">
        <h1 className="title_pages">Annuaire de plateformes</h1>
    </Route>
    <Route
        path="/mes-jeux">
        <h1 className="title_pages2">Mes jeux</h1>
    </Route>
    <Route
        path="/mes-amis">
        <h1 className="title_pages2">Mes amis</h1>
    </Route>
    </div>
)};

// == Export
export default Pages;
