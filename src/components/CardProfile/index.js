import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ModalProfile from 'src/components/CardProfile/ModalProfile';
// == Import icons
import { MdGroupAdd } from 'react-icons/md';
import { FaPlaystation } from 'react-icons/fa';
// == Import scss
import './cardProfile.scss';
const CardProfile = ({ pseudo, platform }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="cardProfile">
      <Card style={{ width: '18rem' }}>
        <Button className="btn-add-friend"><MdGroupAdd /></Button>
        <Button className="btn-modal" onClick={() => setModalShow(true)}>
          <Card.Img variant="top" src="https://www.pdvg.it/wp-content/uploads/2020/01/Destiny-2-Australia-SN.jpg" />
        </Button>
        <Card.Body>
          <Card.Title>{pseudo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Joueuse occasionnelle</Card.Subtitle>
          <p>Ces 3 jeux Favoris</p>
          <div className="profileGame">
            <div className="img">
              <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
            </div>
            <div className="img">
              <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
            </div>
            <div className="img">
              <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
            </div>
          </div>
        </Card.Body>
      </Card>
      <ModalProfile modalShow={modalShow} setModalShow={setModalShow}/>
    </div>
  );
};
CardProfile.propTypes = {
  launchFetchPlayers: PropTypes.func.isRequired,
};
export default CardProfile;