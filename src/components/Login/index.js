import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from "react-card-flip";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoIosArrowBack } from "react-icons/io";

import Field from './Field';

// == Import scss
import './login.scss';

const Login = ({
  modalShow,
  setModalShow,
  email,
  password,
  pseudo,
  platforms,
  changeField,
  handleLogin,
  launchFetchGames,
  launchFetchPlatforms,
  games,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    setModalShow(false);
  };

  useEffect(() => {
    launchFetchGames();
    launchFetchPlatforms();
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="ls"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="div-flipCard">
            <Modal.Header closeButton className="modal__header">
              <Modal.Title id="contained-modal-title-vcenter">
                O'lobby logo  -  Se connecter à O'Lobby
              </Modal.Title>
            </Modal.Header>confirmedPassword
            <Modal.Body className="modal__body">
              <Form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="Adresse Email"
                  onChange={changeField}
                  value={email}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  onChange={changeField}
                  value={password}
                />
                <Button className="btn_login" variant="primary" type="submit">
                  Se connecter
                </Button>
              </Form>
              <div className="linechoice">
                <div className="linechoiceleft"></div>
                <p className="choice">Pas de compte ? clique ci-dessous</p>
                <div className="linechoiceright"></div>
              </div>
              <Button onClick={handleClick} className="btn_createAccount" type="submit">
                S'inscrire
              </Button>
            </Modal.Body>
          </div>

          <div className="div-flipCard">
          <Modal.Header closeButton className="modal__header">
            <Modal.Title id="contained-modal-title-vcenter">
              O'lobby logo  -  S'inscrire à O'Lobby
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal__body">
            <Button onClick={handleClick} className="btn_back" size="sm">
              <IoIosArrowBack />retour login
            </Button>
            <Form onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                placeholder="Adresse Email"
                onChange={changeField}
                value={email}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
              <Field
                name="pseudo"
                type="text"
                placeholder="Votre pseudo"
                onChange={changeField}
                value={pseudo}
              />
            </Form>
            <h4>Choisir mes jeux favoris</h4>
            <Form.Group controlId="formBasicCheckbox">
              {games.map((game) => (
                <Form.Check type="checkbox" label={game.title} value={game.title} name={game.title} id={`game-${game.id}`} key={game.id} />
              ))}
            </Form.Group>
            <h4>Choisir ma plateforme</h4>
            <Form.Group controlId="formBasicCheckbox">
              {platforms.map((platform) => (
                <Form.Check type="radio" label={platform.name} value={platform.name} name="platforms" key={platform.id} id={`platform-${platform.id}`} />
              ))}
            </Form.Group>
            <p>
              En cliquant sur S'inscrire, vous reconnaissez avoir lu et approuvé
              les Conditions d'utilisation et la Politique de confidentialité.
            </p>
            <Button className="btn_createAccount" type="submit">
              S'inscrire
            </Button>
          </Modal.Body>
          </div>
        </ReactCardFlip>
      </Modal>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
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
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Login;
