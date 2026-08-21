import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  tech = [],
  demoLink,
  githubLink,
  caseStudyLink,
  category,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} project preview`}
      />

      <Card.Body>
        {category && (
          <p className="project-category">{category}</p>
        )}

        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "left" }}>
          {description}
        </Card.Text>

        {tech.length > 0 && (
          <div className="project-tech-stack">
            {tech.map((item) => (
              <span key={item} className="project-tech-tag">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          {demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight /> &nbsp; Live
            </Button>
          )}

          {githubLink && (
            <Button
              variant="primary"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp; Code
            </Button>
          )}

          {caseStudyLink && (
            <Button
              variant="primary"
              href={caseStudyLink}
            >
              Case Study
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;