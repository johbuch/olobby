import React from 'react';

// == Import Bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

// == Import scss
import './annuaire.scss';

const Annuaire= () => (
    <Form className="annuaireForm">
        <Form.Row>            
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
            </Form.Label>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                    as="select"
                    className="mr-sm-1 ctrl_form"
                    id="inlineFormCustomSelect"
                    custom
                >
                    <option value="0">Plateforme</option>
                    <option value="1">PC</option>
                    <option value="2">Playsation</option>
                    <option value="3">Xbox</option>
                    <option value="4">Autre</option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                    as="select"
                    className="mr-sm-1 ctrl_form"
                    id="inlineFormCustomSelect"
                    custom
                >
                    <option value="0">Niveau</option>
                    <option value="1">Newbie</option>
                    <option value="2">Noob</option>
                    <option value="3">Sans plus</option>
                    <option value="4">Bon</option>
                    <option value="5">Compétiteur</option>
                    <option value="6">PGM prétentieux</option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                    as="select"
                    className="mr-sm-1 ctrl_form"
                    id="inlineFormCustomSelect"
                    custom
                >
                    <option value="0">Jeux</option>
                    <option value="1">Fifa 21</option>
                    <option value="2">Call of Duty</option>
                    <option value="3">Fornite</option>
                    <option value="4">Apex Légende</option>
                    <option value="5">Rocket League</option>
                    <option value="6">World Of Warcraft</option>
                </Form.Control>
            </Form.Group>            
            <Col xs="auto" className="my-2">
            <Button className="button_form btn_submit" type="submit">Appliquer</Button>
            <Form.Check
                className="remember"
                type="checkbox"
                id="customControlAutosizing"
                label="Se souvenir"
                custom
            />
            </Col>
        </Form.Row>
    </Form>
  
);

export default Annuaire;
