import React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import certImg from "../../Assets/Projects/geco_logo.png";

function Certifications() {
  return (
    <Container fluid className="certifications-section">
      <Particle />
        <Container>
            <h1 className="project-heading">
            My <strong className="purple">Certifications</strong>
            </h1>
            <CertificateCard
              image={certImg}
              title="GECO Web Development Certificate"
              issuer="GECO Academy"
              date="June 2025"
              description="Completed a comprehensive web development bootcamp covering React, Node.js, and modern web technologies."
              link="https://example.com/certificate1"
            />
            <CertificateCard
              image={certImg}
              title="React Advanced Course"
              issuer="Coursera"
              date="May 2025"
              description="Mastered advanced React concepts including hooks, context, and performance optimization."
              link="https://example.com/certificate2"
            />
        </Container>
    </Container>
  );
}

export default Certifications;
