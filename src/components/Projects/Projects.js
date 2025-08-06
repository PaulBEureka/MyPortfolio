import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GECOLogo from "../../Assets/Projects/geco_logo.png";
import TictacToeLogo from "../../Assets/Projects/tic_tac.png";
import ValentimeLogo from "../../Assets/Projects/valen.jpg";
import VGMLogo from "../../Assets/Projects/VGM_logo.png";
import Majayjay from "../../Assets/Projects/Majayjay.png";
import Ensemble from "../../Assets/Projects/Ensemble.png";
import Pokefinder from "../../Assets/Projects/pokefinder.png";
import LaserDodge from "../../Assets/Projects/laser_dodge.png";
import VGMReact from "../../Assets/Projects/VGM_React.png";
import NarutoCatch from "../../Assets/Projects/naruto_catch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works</strong> and{" "}
          <strong className="purple">Contributions</strong>
        </h1>
        <p className="text-general">Here are a few projects I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GECOLogo}
              isBlog={false}
              title="GECO: Green Efforts on Carbon"
              description="A large language model based companion applicaiton in adapting sustainable mobile habits. This is based on Gemini Flash 2.0. Contributed on the backend and the frontend. The application is made using .NET MAUI and .NET 9.0."
              ghLink="https://github.com/MemDbg/Geco"
              demoLink="https://paulbeureka.github.io/GECO-Download-Page/"
              techStack={[
                "csharp",
                "xaml",
                "mvvm",
                "dotnet",
                "sqlite",
                "html",
                "javascript",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGMReact}
              isBlog={false}
              title="VGMech React: A refined and simplified version"
              description="A React-based version of the original VGMech built with ASP.NET, this iteration enhances accessibility and collaboration by integrating Google Sign-In (OAuth 2.0), allowing fellow learners to leave comments. It also features an improved user interface with a stronger emphasis on a game-like theme."
              ghLink="https://github.com/PaulBEureka/VGMech-React"
              demoLink="https://vg-mech-react-n1en.vercel.app/"
              techStack={[
                "react",
                "node",
                "javascript",
                "unity",
                "vue",
                "firebase",
                "bootstrap",
                "css",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokefinder}
              isBlog={false}
              title="PokéFinder: A fan-made project based of PokéAPI"
              description="A modern, interactive Pokédex web application built with React and Vite, allowing users to explore and discover Pokémon from all generations. This application provides detailed information about each Pokémon, including their stats, abilities, types, and more."
              ghLink="https://github.com/PaulBEureka/React-Pokefinder"
              demoLink="https://react-pokefinder.vercel.app/"
              techStack={[
                "react",
                "javascript",
                "unity",
                "vue",
                "tailwind",
                "css",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGMLogo}
              isBlog={false}
              title="VGMech: Learn, Collaborate, and Compete"
              description="A web application designed to help users learn game mechanics in an interactive and collaborative environment. It features a library of game mechanics, competitive mini-games with leaderboards to showcase potential game projects, and user accounts to track progress and earn collectible badges, promoting both engagement and personalized learning."
              ghLink="https://github.com/PaulBEureka/VGMech"
              techStack={[
                "csharp",
                "dotnet",
                "mysql",
                "javascript",
                "unity",
                "bootstrap",
                "css",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Majayjay}
              isBlog={false}
              title="A Prototype Sample Web Application for Majayjay, Laguna"
              description="A prototype sample web application for Majayjay, Laguna. It is a web application that allows users to view information about Majayjay, Laguna, such as its history, culture, and tourist attractions."
              ghLink="https://github.com/Jayhoodini/MP_BATAGA_CUEVAS_DIOMAMPO_ESTREMOS_PAGUIRIGAN"
              techStack={["dotnet", "bootstrap", "css", "mssql"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ensemble}
              isBlog={false}
              title="Ensemble Learning Techniques in Machine Learning"
              description="This project explores ensemble learning techniques such as bagging and boosting. It highlights how these methods enhance predictive performance by combining the strengths of multiple models. The goal is to help users understand the value of model aggregation in machine learning."
              ghLink="https://github.com/MemDbg/EnsembleCompare/tree/main"
              techStack={["jinja", "javascript", "python", "scss", "bootstrap"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ValentimeLogo}
              isBlog={false}
              title="To My Valentine: Minigame Mobile App"
              description="A mobile application created using Java in Android studio. It contains a cute home section, a pattern-matching minigame section, and love letter section which can be unlocked after winning the minigame."
              ghLink="https://github.com/PaulBEureka/Tic_Tac_Toe_Machine_Problem" //TODO: Update this link
              techStack={["java", "xml"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TictacToeLogo}
              isBlog={false}
              title="Tic Tac Toe: A Console Game"
              description="A game of Tic Tac Toe in a console application setting, demonstrating a turn-based game. It has two game modes: Casual and Rush Mode, both having two sub options: vsBot and Two Player modes. The Player could choose between 3 game layouts: 3x3 (Easy) , 6x6 (Normal) , and 10x10 (Hard)."
              ghLink="https://github.com/PaulBEureka/Tic_Tac_Toe_Machine_Problem"
              techStack={["csharp", "dotnet"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaserDodge}
              isBlog={false}
              title="Laser Dodge: A minigame facial recognition as two-factor authentication"
              description="Laser Dodge is a Python Tkinter game where players control a block to dodge moving red lasers and collect yellow blocks, with customizable difficulty and block colors. The game features two-factor authentication, requiring both a username/password and face recognition for secure access. This ensures only authorized users can play while providing an engaging and interactive experience."
              ghLink="https://github.com/PaulBEureka/Laser-Dodge"
              techStack={["python"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NarutoCatch}
              isBlog={false}
              title="Naruto Catch: A minigame using keyboard controls featuring object spawning and collision detection"
              description="A Java minigame where players control Naruto to catch falling fruits while avoiding bombs using left and right keyboard controls. It features animated sprites, background music, a scoring system, and win/lose conditions, delivering a simple yet engaging arcade-style experience."
              ghLink="https://github.com/PaulBEureka/NarutoCatch"
              techStack={["java"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
