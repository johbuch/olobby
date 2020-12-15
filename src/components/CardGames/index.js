import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

// == Import scss
import './cardGames.scss';

const CardGames = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const { title, id, image, typeGame, platforms } = props;

  return (
    <Col xs={12} md={8} lg={4}>
      <div className="cardProfile">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ typeGame !== null ? typeGame.name : "non défini" }</Card.Subtitle>
            <p>plateforme(s)</p>
            <div className="profileGame">
              <div className="img_plat">
                {platforms.map((platform) => (
                  <Image className="img_plat" src={ platform !== null ? platform.image : "erreur" } key={platform.id} {...platform} rounded />
                ))}                
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

CardGames.propTypes = {
  launchFetchGames: PropTypes.func.isRequired,
};

export default CardGames;
