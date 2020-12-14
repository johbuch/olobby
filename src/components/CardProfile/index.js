import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

// == Import
import ModalProfile from 'src/components/CardProfile/ModalProfile';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import './cardProfile.scss';

const CardProfile = (props) => {
  const { pseudo, videogames, frequency, avatar } = props;

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="cardProfile">
      <Card style={{ width: '18rem' }}>
        <Button className="btn-add-friend"><MdGroupAdd /></Button>
        <Button className="btn-modal" onClick={() => setModalShow(true)}>
          <div className="img-card">
            <Card.Img variant="top" src={avatar} />
          </div>
        </Button>
        <Card.Body>
          <Card.Title>{pseudo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">sdfg</Card.Subtitle>
          <p>Ces 3 jeux Favoris</p>
          <div className="profileGame">
            {videogames.map((videogame) => {
              console.log(videogame.image);
              return (
                <div className="img">
                  <Image
                    key={videogame.id}
                    src={videogame.image}
                    rounded
                  />
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
      <ModalProfile modalShow={modalShow} setModalShow={setModalShow} player={props} />
    </div>
  );
};
CardProfile.propTypes = {
  pseudo: PropTypes.string.isRequired,
  videogames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default CardProfile;
