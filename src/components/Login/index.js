import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Field from './Field';

// == Import scss
import './login.scss';

const Login = ({
  modalShow,
  setModalShow,
  email,
  password,
  changeField,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="ls"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal__header">
          <Modal.Title id="contained-modal-title-vcenter">
            O'lobby logo  -  Se connecter à O'Lobby
          </Modal.Title>
        </Modal.Header>
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
          <Button className="btn_createAccount" type="submit">
            S'inscrire
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default Login;
