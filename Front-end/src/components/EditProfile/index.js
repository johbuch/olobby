import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// == Import SCSS
import './editProfile.scss';

// == Import
import FieldEdit from './FieldEdit';
import Checkbox from './FieldEdit/Checkbox';
import ImageEdit from './FieldEdit/ImageEdit';

const EditProfile = ({
  email,
  pseudo,
  avatar,
  changeField,
  launchFetchGames,
  launchFetchPlatforms,
  launchFetchUser,
  games,
  platforms,
  changeCheckbox,
  changeRadio,
  changeImage,
  handleEdit,
  user,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEdit();
  };
  useEffect(() => {
    launchFetchGames();
    launchFetchPlatforms();
    launchFetchUser();
  }, []);
  return (
    <div className="editProfile">
      <Container>
        <h5 className="editProfile__title">Profil de {user.pseudoPlatform}</h5>
        <Form className="editProfile__form" onSubmit={handleSubmit}>
          <Row>
            <Col sm md lg>
              <div className="editProfile__img">
                <Image src={user.avatar} roundedCircle />
              </div>
              <ImageEdit
                onChange={changeImage}
                value={avatar}
              />
            </Col>
            <Col sm md lg>
              <FieldEdit
                name="pseudo"
                type="text"
                placeholder="Pseudo O'Lobbien"
                onChange={changeField}
                value={pseudo}
              />
              <FieldEdit
                name="email"
                type="email"
                placeholder="Mon Email"
                onChange={changeField}
                value={email}
              />
              <FieldEdit
                name="pseudoPlatform"
                type="text"
                placeholder="Pseudo de ma plateforme"
                onChange={changeField}
                value={user.pseudoPlatform}
              />
            </Col>
          </Row>
          <Row>
            <Col sm md lg>
              <p className="editProfile__form__subtitle">Mes jeux</p>
              {games.map((game) => (
                <Checkbox
                  type="checkbox"
                  label={game.title}
                  name={game.title}
                  id={`game-${game.id}`}
                  key={game.id}
                  value={game.id}
                  onChange={changeCheckbox}
                />
              ))}
            </Col>

            <Col sm md lg>
              <p className="editProfile__form__subtitle">Ma plateforme</p>
              {platforms.map((platform) => (
                <Checkbox
                  type="radio"
                  label={platform.name}
                  name="plateformes"
                  id={`platform-${platform.id}`}
                  key={platform.id}
                  value={platform.id}
                  onChange={changeRadio}
                />
              ))}
            </Col>

            <Col sm md lg>
              <p className="editProfile__form__subtitle">Ma fréquence de jeu</p>
              <Form.Check
                type="radio"
                label="Joueur occasionnel"
                name="level"
                id="level1"
              />
              <Form.Check
                type="radio"
                label="Joueur régulier"
                name="level"
                id="level2"
              />
              <Form.Check
                type="radio"
                label="No life"
                name="level"
                id="level3"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldEdit
                name="description"
                placeholder="Votre description"
                onChange={changeField}
                value={user.description}
                as="textarea"
                rows="10"
              />
            </Col>
          </Row>
          <Button type="submit" className="editProfile__send">Modifier</Button>
        </Form>
      </Container>
    </div>
  );
};

EditProfile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  changeRadio: PropTypes.func.isRequired,
  launchFetchGames: PropTypes.func.isRequired,
  launchFetchPlatforms: PropTypes.func.isRequired,
  launchFetchUser: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudoPlatform: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default EditProfile;
