import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './sectionhomedisconnected.scss';

const SectionHomeDisconnected = () => (
  <div>
    <section className="section">
      <Container>
        <Row>
          <Col sm md lg>
            <div className="section__img">
              <img
                className="section__img__image1"
                alt="imagesection1"
                src="https://img.huffingtonpost.com/asset/5cf512a3250000310adbe3b0.jpeg?ops=scalefit_960_noupscale"
              />
            </div>
          </Col>
          <Col sm md lg>
            <div className="section__text">
              <h1 className="section__title">Titre</h1>
              <p className="section__paragraph"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus sint expedita esse sunt tempore quas nihil eligendi nostrum, aperiam ipsa est ad quam quia placeat fugiat officiis corrupti. Deleniti similique modi ut consequatur eius vitae corrupti ullam cumque ratione!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm md lg>
            <div className="section__text">
              <h1 className="section__title">Titre</h1>
              <p className="section__paragraph"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus sint expedita esse sunt tempore quas nihil eligendi nostrum, aperiam ipsa est ad quam quia placeat fugiat officiis corrupti. Deleniti similique modi ut consequatur eius vitae corrupti ullam cumque ratione!
              </p>
            </div>
          </Col>
          <Col sm md lg>
            <div className="section__img">
              <img
                className="section__img__image1"
                alt="imagesection2"
                src="https://ak.picdn.net/shutterstock/videos/1020931030/thumb/1.jpg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default SectionHomeDisconnected;
