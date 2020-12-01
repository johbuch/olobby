import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
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
                    <Form.Label><h4>Indentifiant</h4></Form.Label>
                    <Form.Control type="email" placeholder="Adresse Email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><h4>Mot de passe</h4></Form.Label>
                    <Form.Control type="password" placeholder="mot de passe" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
                <div className="linechoice">
                    <div className="linechoiceleft"></div>   
                    <p className="choice">Pas de compte ? clic ci-dessous</p>
                    <div className="linechoiceright"></div>
                </div>
                <Button variant="primary" type="submit">
                    S'inscrire
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
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
  
  render(<App />);
};

export default Login;
