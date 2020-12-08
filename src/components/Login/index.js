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
  emailRegister,
  password,
  passwordRegister,
  pseudo,
  changeField,
  handleLogin,
}) => {
  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
    handleLogin();
    setModalShow(false);
  };

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
            </Modal.Header>
            <Modal.Body className="modal__body">
              <Form onSubmit={handleSubmitLogin}>
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
              <Form onSubmit={handleSubmitLogin}>
                <Field
                  name="emailRegister"
                  type="email"
                  placeholder="Adresse Email"
                  onChange={changeField}
                  value={emailRegister}
                />
                <Field
                  name="passwordRegister"
                  type="password"
                  placeholder="Mot de passe"
                  onChange={changeField}
                  value={passwordRegister}
                />
                <Field
                  name="pseudo"
                  type="text"
                  placeholder="Votre pseudo"
                  onChange={changeField}
                  value={pseudo}
                />
              </Form>
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
  emailRegister: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordRegister: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Login;
