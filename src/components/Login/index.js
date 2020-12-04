import React, {useState} from 'react';
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
  changeField,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
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
              <Button onClick={handleClick} className="btn_createAccount" type="submit">
                S'inscrire
              </Button>
            </Modal.Body>
          </div>
          <div>
          <Modal.Header closeButton className="modal__header">
              <Modal.Title id="contained-modal-title-vcenter">
                O'lobby logo  -  Se connecter à O'Lobby
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal__body">
            <p><a onClick={handleClick}>  <IoIosArrowBack /> retour login </a></p>
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
                <Field
                  name="password"
                  type="password"
                  placeholder="Confirmer le Mot de passe"
                  onChange={changeField}
                  value={password}
                />
              </Form>
              <h4>Choisir mes jeux favoris   3/3</h4>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="CalofDuTea" />
                <Form.Check type="checkbox" label="Fifou 21" />
                <Form.Check type="checkbox" label="Munster Hunter AOP world" />
                <Form.Check type="checkbox" label="Fournight" />
                <Form.Check type="checkbox" label="World of Farmcraft" />
                <Form.Check type="checkbox" label="GTAssis " />
                <Form.Check type="checkbox" label="CyberFunk" />
              </Form.Group>
              <h4>Choisir ma plateforme</h4>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Playstation" />
                <Form.Check type="checkbox" label="Xbox" />
                <Form.Check type="checkbox" label="PC" />
              </Form.Group>
              <p>En cliquant sur S'inscrire, vous reconnaissez avoir lu et approuvé les Conditions d'utilisation et la Politique de confidentialité.</p>
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
};

export default Login;
