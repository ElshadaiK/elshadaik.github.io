import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Design inspired by{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Soumayajit
            </a>
          </h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>
            © {year} Elshadai Tegegn
            {" · "}
            <a
              href="YOUR_MODELING_PORTFOLIO_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="model-footer-link"
            >
              other side of me ↗
            </a>
          </h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/elshadaik"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/pour_qua"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/elshadai-tegegn/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/pour_qua"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;