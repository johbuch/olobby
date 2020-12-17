import React from 'react';
import PropTypes from 'prop-types';

// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

// == Import scss
import './cardGames.scss';

const CardGames = (props) => {
  const {
    title,
    image,
    typeGame,
    platforms,
  } = props;

  return (
    <Col xs={12} md={8} lg={4}>
      <div className="cardGames">
        <Card style={{ width: '18rem' }}>
          <div className="img-card">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
            >
              { typeGame !== null ? typeGame.name : 'non défini' }
            </Card.Subtitle>
            <p>plateforme(s)</p>
            <div className="profileGame">
              <div className="img_plat">
                {platforms.map((platform) => (
                  <Image
                    className="img_plat"
                    src={platform !== null ? platform.image : 'erreur'}
                    key={platform.id}
                    {...platform}
                    rounded
                  />
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
  typeGame: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired,
  ),

};
CardGames.defaultProps = {
  image: '',
  typeGame: '',
  title: '',
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      title: '',
    }),
  ),
};

export default CardGames;
