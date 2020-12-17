// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './devs.scss';

const Devs = () => (
  <div className="devs">
    <Container>
      <Row>
        <Col sm md lg>
          <h1 className="devs__title">
            • Les Devs •
          </h1>
        </Col>
      </Row>
      <div className="devs__3devs">
        <Row>
          <Col sm md lg>
            <img
              className="devs__image1"
              alt="photodetristan"
              src="https://imagizer.imageshack.com/img923/6249/rVwR5H.png"
            />
            <h2 className="devs__devname1">
              Tristan
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
            </p>
          </Col>
          <Col sm md lg>
            <img
              className="devs__image1"
              alt="photodemaxime"
              src="https://imagizer.imageshack.com/img922/7767/k7j6H8.png"
            />
            <h2 className="devs__devname1">
              Maxime
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
            </p>
          </Col>
          <Col sm md lg>
            <img
              className="devs__image1"
              alt="photodecorentin"
              src="https://imagizer.imageshack.com/img922/8421/ptrm9N.png"
            />
            <h2 className="devs__devname1">
              Corentin
            </h2>
            <p className="devs__devdescription1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error, minus?
            </p>
          </Col>
        </Row>
      </div>
      <div className="devs__2devs">
        <Row>
          <Col sm md lg>
            <img
              className="devs__image2"
              alt="photodejohan"
              src="https://imagizer.imageshack.com/img923/9006/cjMAsm.png"
            />
            <h2 className="devs__devname2">
              Johan
            </h2>
            <p className="devs__devdescription2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.<br></br>
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.<br></br>
              Error, minus?
            </p>
          </Col>
          <Col sm md lg>
            <img
              className="devs__image2"
              alt="photodestan"
              src="https://imagizer.imageshack.com/img924/7536/30rhum.png"
            />
            <h2 className="devs__devname2">
              Stan
            </h2>
            <p className="devs__devdescription2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
              Id, placeat officiis nostrum eos nulla quibusdam vel ex unde.<br></br>
              Id, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.<br></br>
              Error, minus?
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Devs;
