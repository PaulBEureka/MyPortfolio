import React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";

function Certifications() {
  return (
    <Container fluid className="certifications-section">
      <Particle />
        <Container>
            <h1 className="project-heading">
            My <strong className="purple">Certifications</strong>
            </h1>
            
        </Container>
    </Container>
  );
}

export default Certifications;
