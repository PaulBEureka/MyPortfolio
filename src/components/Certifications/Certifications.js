import React from "react";
import Particle from "../Particle";
import { Container, Row } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import BasicReactImg from "../../Assets/Certifications/BasicReact.jpg";
import AdvReactImg from "../../Assets/Certifications/AdvancedReact.jpg";
import AWSAcadGraduateImg from "../../Assets/Certifications/AWS_Academy_Graduate.jpg";
import CodeChumPythonImg from "../../Assets/Certifications/Codechum_Python.jpg";
import ComptiaITFPlusImg from "../../Assets/Certifications/CompTIA_ITFPlus.jpg";
import JPCSImg from "../../Assets/Certifications/JPCS.jpg";
import WadhwaniEmployabilityImg from "../../Assets/Certifications/Wadhwani_JobReady.jpg";


function Certifications() {
  return (
    <Container fluid className="certifications-section">
      <Particle />
        <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <h1 className="project-heading">
              My <strong className="purple">Certifications</strong>
              </h1>
              <p className="text-general">
                My commitment to continuous learning
              </p>
            </Row>
            <CertificateCard
              image={AdvReactImg}
              title="Coursera - Advanced React"
              issuer="Meta"
              date="April 2025"
              description="Completed the Advanced React course, focusing on hooks, context API, and performance optimization techniques."
              link="https://www.coursera.org/account/accomplishments/verify/B3GEWI4OTPLN"
            />
            <CertificateCard
              image={BasicReactImg}
              title="Coursera - Basic React"
              issuer="Meta"
              date="Feb 2025"
              description="Completed the Basic React course, covering fundamental concepts such as components, state management, and lifecycle methods."
              link="https://www.coursera.org/account/accomplishments/verify/POYMBUEBL8KJ"
            />
            <CertificateCard
              image={ComptiaITFPlusImg}
              title="CompTIA IT Fundamentals (ITF+) Certification"
              issuer="CompTIA"
              date="July 2025"
              description="Achieved CompTIA IT Fundamentals (ITF+) certification, demonstrating foundational knowledge of IT concepts, terminology, and infrastructure."
              link="https://www.certmetrics.com/comptia/public/verification.aspx/"
            />
            <CertificateCard
              image={AWSAcadGraduateImg}
              title="AWS Academy Graduate - AWS Academy Cloud Foundations"
              issuer="AWS Academy"
              date="Nov 2023"
              description="Completed the AWS Academy Cloud Foundations course, gaining foundational knowledge of cloud computing and AWS services."
              link="https://www.credly.com/badges/326cee20-9d3f-48c2-9992-21a155bc9362/print"
            />
            <CertificateCard
              image={WadhwaniEmployabilityImg}
              title="Wadhwani - Employability Skills - JobReady"
              issuer="Wadhwani Foundation"
              date="June 2025"
              description="Completed the Wadhwani Employability Skills - JobReady course, enhancing job readiness skills such as communication, problem-solving, and teamwork."
              link="https://web.certificate.wfglobal.org/en/certificate?certificateId=68576be7dbb1c63612e3ed27"
            />
            <CertificateCard
              image={JPCSImg}
              title="Junior Philippine Computer Society (JPCS)-Mapúa Malayan Colleges Laguna Chapter"
              issuer="Junior Philippine Computer Society"
              date="2024 - 2025"
              description="Served as a member of the Junior Philippine Computer Society, contributing to various activities and initiatives aimed at promoting computer science education and professional development."
            />
            <CertificateCard
              image={CodeChumPythonImg}
              title="CodeChum - Python Course"
              issuer="CodeChum"
              date="Jan 2022"
              description="Completed the Python course on CodeChum, covering basic to intermediate Python programming concepts and applications."
            />
        </Container>
    </Container>
  );
}

export default Certifications;
