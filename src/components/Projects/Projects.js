import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GECOLogo from "../../Assets/Projects/geco_logo.png";
import TictacToeLogo from "../../Assets/Projects/tic_tac.png";
import ValentimeLogo from "../../Assets/Projects/valen.jpg"; 
import VGMLogo from "../../Assets/Projects/VGM_logo.png"; 

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGMLogo}
              isBlog={false}
              title="VisualMech: Learn Game Mechanics Interactively and Collaboratively"
              description="A web application that allows users to learn game mechanics interactively and collaboratively. It features a collaborative whiteboard, a library of game mechanics, and a comment section for discussions."
              ghLink="https://github.com/PaulBEureka/VGMech-React"
              demoLink="https://vg-mech-react-n1en.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TictacToeLogo}
              isBlog={false}
              title="Tic Tac Toe: A Console Game"
              description="A game of Tic Tac Toe in a console application setting, demonstrating a turn-based game. It has two game modes: Casual and Rush Mode, both having two sub options: vsBot and Two Player modes. The Player could choose between 3 game layouts: 3x3 (Easy) , 6x6 (Normal) , and 10x10 (Hard)."
              ghLink="https://github.com/PaulBEureka/Tic_Tac_Toe_Machine_Problem"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ValentimeLogo}
              isBlog={false}
              title="To My Valentine: Minigame Mobile App"
              description="A mobile application created using Java in Android studio. It contains a cute home section, a pattern-matching minigame section, and love letter section which can be unlocked after winning the minigame."
              ghLink="https://github.com/PaulBEureka/Tic_Tac_Toe_Machine_Problem" //TODO: Update this link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
