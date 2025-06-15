import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiGithub,
  SiPostman,
  SiVisualstudio,
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiVisualstudiocode />
          <span className="tech-label">VS Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiVisualstudio />
          <span className="tech-label">Visual Studio</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiPostman />
          <span className="tech-label">Postman</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiAndroidstudio />
          <span className="tech-label">Android Studio</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiGithub />
          <span className="tech-label">GitHub</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
