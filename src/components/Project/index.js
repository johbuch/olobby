// == Import npm
import React from 'react';

// == Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import scss
import './project.scss';

const Project = () => (
  <div className="project">
    <Container>
      <Row>
        <Col sm md lg>
          <h1 className="project__maintitle"> QUI SOMMES NOUS ?</h1>
          <h1 className="project__title">• Le Projet •</h1>
          <p className="project__paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            placeat tempora sequi vitae fuga saepe, accusamus excepturi corrupti
            necessitatibus laboriosam labore sed ratione sapiente dignissimos
            tenetur alias similique non nostrum esse sit? Deleniti,
            necessitatibus recusandae. Quam quod beatae molestias saepe animi
            inventore, ullam sint enim ipsum aliquam, vitae laboriosam
            provident!
          </p>
        </Col>
      </Row>
    </Container>
  </div>

);

export default Project;
