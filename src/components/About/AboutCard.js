import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi, I'm <span className="purple">Elsh</span>.
            <br />
            <br />I grew up in{" "}
            <span className="purple">Addis Ababa, Ethiopia</span>, studied
            Software Engineering, and now build software in the New York
            metropolitan area.
            <br />
            <br />
            I'm currently a{" "}
            <span className="purple">Software Engineer at Audible</span> and a
            graduate Computer Science student at{" "}
            <span className="purple">Georgia Tech</span>.
            <br />
            <br />
            My curiosity tends to move across disciplines. I enjoy software
            systems, AI, research, product ideas, and figuring out how emerging
            technologies can become useful real-world experiences.
            <br />
            <br />
            Outside of engineering, I'm usually doing something that gets me
            away from a screen.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Running & fitness
            </li>

            <li className="about-activity">
              <ImPointRight /> Traveling & exploring
            </li>

            <li className="about-activity">
              <ImPointRight /> Technical content creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Modeling & fashion{" "}
              <a
                href="https://elshadaik.github.io/modeling-portfolio/"
                target="_blank"
                rel="noreferrer"
                className="model-secret-link"
                aria-label="View my modeling portfolio"
              >
                ◌
              </a>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What you need to learn isn't how to make everything easy, but what
            to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer>

          <footer className="blockquote-footer">Elsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
