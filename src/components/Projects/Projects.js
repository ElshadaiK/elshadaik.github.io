import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nilestream from "../../Assets/Projects/nilestream.png";
import pageNpen from "../../Assets/Projects/pageNpen.png";
import shega from "../../Assets/Projects/shega.png";
import eldelicios from "../../Assets/Projects/eldelicios.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shega}
              isBlog={false}
              title="Shega"
              description="The biggest Ethiopian Tech News Platform"
              demoLink="https://shega.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eldelicios}
              isBlog={false}
              title="El Delicios"
              description="A portal for an Ethiopian restaurant based in Spain"
              demoLink="https://xn--eldeliciosdetiopa-svb.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pageNpen}
              isBlog={false}
              title="Pen and Page Hub"
              description="Book reviewing tool"
              demoLink="https://reader-book-review-webapp.herokuapp.com/home"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nilestream}
              isBlog={false}
              title="Nile Stream"
              description="An audio streaming platform"
              demoLink="https://nilestream.co"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
