import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import './cardGames.scss';

const CardGames = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const { title, id, image } = props;

  return (
    <div className="cardProfile">
      <Card style={{ width: '18rem' }}>
        <Button className="btn-add-friend"><MdGroupAdd /></Button>
          <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
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
    </div>
  );
};

CardGames.propTypes = {
  launchFetchGames: PropTypes.func.isRequired,
};

export default CardGames;
