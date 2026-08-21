import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiGithub,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
    </Row>
  );
}

export default Toolstack;