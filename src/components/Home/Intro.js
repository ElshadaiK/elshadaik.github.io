import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRO</span>DUCE MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Software Engineer at Audible</b>{" "}
              interested in the intersection of software systems, artificial
              intelligence, and human-centered products.
              <br />
              <br />
              By day, I build production software. Outside of work, I spend a
              lot of time experimenting with <b className="purple">AI agents</b>
              , intelligent applications, and ideas that sit somewhere between
              research and product.
              <br />
              <br />
              I'm also pursuing my{" "}
              <b className="purple">M.S. in Computer Science at Georgia Tech</b>
              , where I've explored areas including reinforcement learning,
              human-computer interaction, and AI.
              <br />
              <br />I like taking things from{" "}
              <b className="purple">"this would be interesting"</b> to{" "}
              <b className="purple">"I built it."</b>
              <br />
              <br />
              And when I'm not building, I'm often explaining — through
              technical content, mentorship, and projects that make complex
              ideas easier to understand.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Elshadai Tegegn" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elshadaik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/pour_qua"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elshadai-tegegn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pour_qua"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
