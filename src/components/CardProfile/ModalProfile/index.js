import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// == Import icons
import { MdGroupAdd } from 'react-icons/md';
import { FaPlaystation } from 'react-icons/fa';

// == Import scss
import 'src/components/CardProfile/cardProfile.scss';

const ModalProfile = ({ modalShow, setModalShow }) => (
    <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="img">
            <Image src="https://www.pdvg.it/wp-content/uploads/2020/01/Destiny-2-Australia-SN.jpg" roundedCircle />
          </div>
          <Modal.Title>
            Scionna
            <span className="level">Joueuse occasionnelle</span>
            <p className="nickname_olobby">Scionna 56</p>
          </Modal.Title>
          <Button className="btn__addFriend"><MdGroupAdd />Ajouter un amis</Button>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm md lg>
                <article className="gamePlayer">
                  <p>Liste des jeux</p>
                  <div>
                    <div className="img">
                        <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
                      </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
                    </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
                    </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" rounded />
                    </div>
                  </div>
                </article>
              </Col>
              <Col sm md lg>
                <article className="friendPlayer">
                  <p>Liste des amis</p>
                  <div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" roundedCircle />
                    </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" roundedCircle />
                    </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" roundedCircle />
                    </div>
                    <div className="img">
                      <Image src="https://www.journaldugeek.com/content/uploads/2019/10/cod-640x360.jpg" roundedCircle />
                    </div>
                  </div>
                </article>
              </Col>
              <Col sm md lg>
                <article className="consolePlayer">
                  <p>Liste des plateformes</p>
                  <div>
                    <FaPlaystation />
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <p className="description">
            Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis,
            non nulli velariis umbraculorum theatralium latent, quae Campanam
            imitatus lasciviam Catulus
            in aedilitate sua suspendit omnium primus; aut pugnaciter aleis
            certant turpi sono fragosis naribus introrsum
            reducto spiritu concrepantes; aut quod est studiorum omnium maximum
            ab ortu lucis ad vesperam sole fatiscunt vel pluviis, 
            per minutias aurigarum equorumque praecipua vel delicta scrutantes.
          </p>
        </Modal.Footer>
      </Modal>
);

export default ModalProfile;
