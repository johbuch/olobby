import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// == Import icons
import { MdGroupAdd } from 'react-icons/md';

// == Import scss
import 'src/components/CardProfile/cardProfile.scss';
const ModalProfile = ({ modalShow, setModalShow, player }) => {
  const {pseudo, platform, pseudoPlatform, videogames, description} = player;
  return (
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
            {pseudo}
            <span className="level">Joueuse occasionnelle</span>
            <p className="nickname_olobby">Id plate-forme:{pseudoPlatform}</p>
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
                  {videogames.map((videogame) => {
                    console.log(videogame.image)
                    return (
                    <div className="img">
                      <Image key={videogame.id} src={videogame.image} rounded/>
                    </div>
                  )})}
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
                  {/* image ici */}
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <p className="description">
          Description :{description}
          </p>
        </Modal.Footer>
      </Modal>
)};


export default ModalProfile;
