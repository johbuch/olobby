import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ModalProfile from 'src/components/CardProfile/ModalProfile';
import Col from 'react-bootstrap/Col';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import './cardProfile.scss';

const CardProfile = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { pseudo, platform, videogames, avatar } = props;
  return (
    <Col xs={12} md={8} lg={4}>
      <div className="cardProfile">
        <Card style={{ width: '18rem' }}>
          <Button className="btn-add-friend"><MdGroupAdd /></Button>
          <Button className="btn-modal" onClick={() => setModalShow(true)}>
            <Card.Img variant="top" src={avatar} />
          </Button>
          <Card.Body>
            <Card.Title>{pseudo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Joueuse occasionnelle</Card.Subtitle>
            <p>Ces 3 jeux Favoris</p>
            <div className="profileGame">
              {videogames.map((videogame) => {
                console.log(videogame.image);
                return (
                  <div className="img">
                    <Image key={videogame.id} src={videogame.image} rounded/>
                  </div>
                );
              })}
            </div>
          </Card.Body>
        </Card>
        <ModalProfile modalShow={modalShow} setModalShow={setModalShow} player={props} />
      </div>
    </Col>
  );
};
CardProfile.propTypes = {
  launchFetchPlayers: PropTypes.func.isRequired,
};
export default CardProfile;
