import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import 'src/components/CardProfile/cardProfile.scss';

const ModalProfile = ({ modalShow, setModalShow, player }) => {
  const {pseudo, platform, pseudoPlatform, videogames, description, frequency, avatar} = player;
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <div className="img">
          <Image src={avatar} roundedCircle />
        </div>
        <Modal.Title>
          {pseudoPlatform}
          <span className="level">{ frequency !== null ? frequency.name : "aucun" }</span>
          <p className="nickname_olobby">{pseudo}</p>
        </Modal.Title>
        <Button className="btn__addFriend"><MdGroupAdd />Ajouter un amis</Button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm md lg>
              <article className="gamePlayer">
                <p>Liste des jeux</p>
                <div>
                  {videogames.map((videogame) => (
                    <div className="img" key={videogame.id}>
                      <Image key={videogame.id} src={videogame.image} rounded />
                    </div>
                  ))}
                </div>
              </article>
            </Col>
            <Col sm md lg>
              <article className="consolePlayer">
                <p>Sa plateforme</p>
                <div>
                  <Image className="img_plat_modal"
                    src={platform !== null ? platform.image : "https://www.pdvg.it/wp-content/uploads/2020/01/Destiny-2-Australia-SN.jpg" }
                  />
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <p className="description">
          Description :{description}
        </p>
      </Modal.Footer>
    </Modal>
  );
};

ModalProfile.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
  pseudoPlatform: PropTypes.string,
  description: PropTypes.string,
  player: PropTypes.object.isRequired,
};

ModalProfile.defaultProps = {
  pseudo: '',
  pseudoPlatform: '',
  description: '',
};

export default ModalProfile;
