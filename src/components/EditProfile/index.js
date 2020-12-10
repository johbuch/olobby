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

const EditProfile = ({
  email,
  pseudoOlobbien,
  pseudo,
  changeField,
  description,
  launchFetchGames,
  launchFetchPlatforms,
  games,
  platforms,
  changeCheckbox,
}) => {
  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
  };
  useEffect(() => {
    launchFetchGames();
    launchFetchPlatforms();
  }, []);
  return (
    <div className="editProfile">
      <Container>
        <h5 className="editProfile__title">Profil de Scionna</h5>
        <Form className="editProfile__form" onSubmit={handleSubmitLogin}>
          <Row>
            <Col sm md lg>
              <div className="editProfile__img">
                <Image src="https://www.pdvg.it/wp-content/uploads/2020/01/Destiny-2-Australia-SN.jpg" roundedCircle />
              </div>
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input isValid />
                <Form.File.Label data-browse="Choisissez votre image">
                  Votre image
                </Form.File.Label>
              </Form.File>
            </Col>
            <Col sm md lg>
              <FieldEdit
                name="pseudoOlobbien"
                type="text"
                placeholder="Pseudo O'Lobbien"
                onChange={changeField}
                value={pseudoOlobbien}
              />
              <FieldEdit
                name="email"
                type="email"
                placeholder="Mon Email"
                onChange={changeField}
                value={email}
              />
              <FieldEdit
                name="pseudo"
                type="text"
                placeholder="Pseudo de ma plateforme"
                onChange={changeField}
                value={pseudo}
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
                  value={game.title}
                  onChange={changeCheckbox}
                />
              ))}
            </Col>

            <Col sm md lg>
              <p className="editProfile__form__subtitle">Ma plateformes</p>
              {platforms.map((platform) => (
                <Checkbox
                  type="radio"
                  label={platform.name}
                  name="plateformes"
                  id={`platform-${platform.id}`}
                  key={platform.id}
                  value={platform.name}
                  onChange={changeCheckbox}
                />
              ))}
            </Col>

            <Col sm md lg>
              <p className="editProfile__form__subtitle">Mon niveau</p>
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
              <Form.Label>Ma description</Form.Label>
              <FieldEdit
                name="description"
                placeholder="Votre description"
                onChange={changeField}
                value={description}
                as="textarea"
                rows="10"
              />
            </Col>
          </Row>
          <Button className="editProfile__send">Modifier</Button>
        </Form>
      </Container>
    </div>
  );
};

EditProfile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudoOlobbien: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  launchFetchGames: PropTypes.func.isRequired,
  launchFetchPlatforms: PropTypes.func.isRequired,
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
};

export default EditProfile;
