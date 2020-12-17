import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

// == Import
import ModalProfile from 'src/components/CardProfile/ModalProfile';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import './cardProfile.scss';

const CardProfile = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const {
    pseudoPlatform,
    platform,
    videogames,
    avatar,
    frequency,
  } = props;

  return (
    <Col xs={12} md={6} lg={3}>
      <div className="cardProfile">
        <Card>
          <Button className="btn-add-friend"><MdGroupAdd /></Button>
          <Button className="btn-modal" onClick={() => setModalShow(true)}>
            <div className="img-card">
              <Card.Img variant="top" src={avatar} />
            </div>
          </Button>
          <Card.Body>
            <Card.Title>
              <div>
                <Image className="img_plat"
                  src={platform !== null ? platform.image : "https://www.pdvg.it/wp-content/uploads/2020/01/Destiny-2-Australia-SN.jpg" } rounded
                />{pseudoPlatform}
              </div>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ frequency !== null ? frequency.name : "aucun" }</Card.Subtitle>
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
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  id: PropTypes.number.isRequired,
  changeAddFriend: PropTypes.func.isRequired,
  videogames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

};
CardProfile.defaultProps = {
  avatar: '',
};
export default CardProfile;
