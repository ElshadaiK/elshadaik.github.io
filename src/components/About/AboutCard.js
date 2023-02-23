import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there <span className="purple">Elsh  </span> here.
            Born and raised in <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />I'm a software engineering senior year student at Addis Ababa University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What you need to learn isn't how to make everything easy, but what to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
