import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoIosArrowBack } from 'react-icons/io';

import Field from './Field';

// == Import scss
import './login.scss';

const Login = ({
  modalShow,
  setModalShow,
  email,
  password,
  pseudo,
  changeField,
  handleLogin,
  handleRegister,
}) => {
  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
    handleLogin();
    setModalShow(false);
  };

  const handleSubmitRegister = (evt) => {
    evt.preventDefault();
    handleRegister();
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
                Se connecter O'Lobby
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
                S'inscrire O'Lobby
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal__body">
              <Button onClick={handleClick} className="btn_back" size="sm">
                <IoIosArrowBack />retour login
              </Button>
              <Form onSubmit={handleSubmitRegister}>
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
                  placeholder="Votre pseudo O'Lobbien"
                  onChange={changeField}
                  value={pseudo}
                />
                <Button className="btn_createAccount" type="submit">
                  S'inscrire
                </Button>
              </Form>
            </Modal.Body>
          </div>
        </ReactCardFlip>
      </Modal>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  modalShow: PropTypes.bool,
  setModalShow: PropTypes.func,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func,
  pseudo: PropTypes.string,
};

Login.defaultProps = {
  email: '',
  password: '',
  pseudo: '',
};

export default Login;
