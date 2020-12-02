import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalBody from 'react-bootstrap/ModalBody';
import Form from 'react-bootstrap/Form'

// == Import scss
import './login.scss';

const Login = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            O'lobby logo  -  Se connecter à O'Lobby
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Identifiant</Form.Label>
              <Form.Control className="input_color" type="email" placeholder="Adresse Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control className="input_color" type="password" placeholder="mot de passe" />
            </Form.Group>
            <Button className="btn_login" variant="primary" type="submit">
              Se connecter
            </Button>
            <div className="linechoice">
              <div className="linechoiceleft"></div>
              <p className="choice">Pas de compte ? clique ci-dessous</p>
              <div className="linechoiceright"></div>
            </div>
              <Button className="btn_createAccount" type="submit">
                S'inscrire
              </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch Login modal
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Login;
