import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";
import { SiSolidity, SiPhp, SiLaravel } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <CgCPlusPlus />
          <span className="tech-label">C++</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJavascript1 />
          <span className="tech-label">JavaScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiNodejs />
          <span className="tech-label">Node.js</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiReact />
          <span className="tech-label">React</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiSolidity />
          <span className="tech-label">Solidity</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiGit />
          <span className="tech-label">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiPython />
          <span className="tech-label">Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJava />
          <span className="tech-label">Java</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiPhp />
          <span className="tech-label">PHP</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiLaravel />
          <span className="tech-label">Laravel</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
