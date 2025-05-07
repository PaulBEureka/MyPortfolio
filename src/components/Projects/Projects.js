import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GECOLogo from "../../Assets/Projects/geco_logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GECOLogo}
              isBlog={false}
              title="GECO: Green Efforts on Carbon"
              description="A large language model based companion applicaiton in adapting sustainable mobile habits. This is based on Gemini Flash 2.0. Contributed on the backend and the frontend. The application is made using .NET MAUI and .NET 9.0."
              ghLink="https://github.com/MemDbg/Geco"
              demoLink="https://paulbeureka.github.io/GECO-Download-Page/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
